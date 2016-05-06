import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  selectSong,
  updateSong,
  markSongPlayed,
  moveSong,
  deleteSong,
} from '../actions/Actions.js';

import AddedSongsDisplay from './AddedSongsDisplay';


class AddedSongsConnector extends Component {
  render() {
    const {
      deleteSong,
      markSongPlayed,
      moveSong,
      selectSong,
      updateSong,
      songs,
      selectedSong,
    } = this.props;


    return (
      <AddedSongsDisplay
        deleteSong={ deleteSong }
        markSongPlayed={ markSongPlayed }
        moveSong={ moveSong }
        selectSong={ selectSong }
        updateSong={ updateSong }
        songs={ songs.toJSON() }
        selectedSong={ selectedSong }
      />
    );
  }
}

function mapStateToProps({state}) {
  return {
    songs: state.getIn(['data','setlist', 'songs']),
    selectedSong: state.getIn(['view','song','selected']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectSong: bindActionCreators(selectSong, dispatch),
    updateSong: bindActionCreators(updateSong, dispatch),
    markSongPlayed: bindActionCreators(markSongPlayed, dispatch),
    moveSong: bindActionCreators(moveSong, dispatch),
    deleteSong: bindActionCreators(deleteSong, dispatch),
  };
}

// Wrap the component to inject dispatch and state into it

export default connect(mapStateToProps, mapDispatchToProps)(AddedSongsConnector);
