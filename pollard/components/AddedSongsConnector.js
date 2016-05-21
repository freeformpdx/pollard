import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  selectSong,
  deselectSong,
  updateSong,
  markSongPlayed,
  moveSong,
  deleteSong,
} from '../actions/Actions.js';

import AddedSongsDisplay from './AddedSongsDisplay';


class AddedSongsConnector extends Component {
  render() {
    return (
      <AddedSongsDisplay { ...this.props }/>
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
    deselectSong: bindActionCreators(deselectSong, dispatch),
    updateSong: bindActionCreators(updateSong, dispatch),
    markSongPlayed: bindActionCreators(markSongPlayed, dispatch),
    moveSong: bindActionCreators(moveSong, dispatch),
    deleteSong: bindActionCreators(deleteSong, dispatch),
  };
}

// Wrap the component to inject dispatch and state into it

export default connect(mapStateToProps, mapDispatchToProps)(AddedSongsConnector);
