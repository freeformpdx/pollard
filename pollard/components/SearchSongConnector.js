import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addSong,
  artistChange,
  searchSong,
  titleChange,
} from '../actions/Actions.js';

import SearchSongDisplay from './SearchSongDisplay';

class SearchSongConnector extends Component {
  render() {
    const {
      addSong,
      artistChange,
      lastSearchedSong,
      searchSong,
      titleChange,
    } = this.props;

    return (
      <SearchSongDisplay
        addSong={ addSong }
        artistChange={ artistChange }
        lastSearchedSong={ lastSearchedSong }
        searchSong={ searchSong }
        titleChange={ titleChange }/>
    );
  }
}

function mapStateToProps({state}) {
  return {
    lastSearchedSong: state.getIn(['view', 'search']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addSong: bindActionCreators(addSong, dispatch),
    artistChange: bindActionCreators(artistChange, dispatch),
    searchSong: bindActionCreators(searchSong, dispatch),
    titleChange: bindActionCreators(titleChange, dispatch),
  };
}

// Wrap the component to inject dispatch and state into it

export default connect(mapStateToProps, mapDispatchToProps)(SearchSongConnector);