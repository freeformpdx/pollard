import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addSong,
  artistChange,
  clearSearchSongInputs,
  searchSong,
  titleChange,
  setError,
  clearError,
} from '../actions/Actions.js';

import SearchSongDisplay from './SearchSongDisplay';

class SearchSongConnector extends Component {
  render() {
    return (
      <SearchSongDisplay {...this.props} />
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
    clearSearchSongInputs: bindActionCreators(clearSearchSongInputs, dispatch),
    searchSong: bindActionCreators(searchSong, dispatch),
    titleChange: bindActionCreators(titleChange, dispatch),
    setError: bindActionCreators(setError, dispatch),
    clearError: bindActionCreators(clearError, dispatch),
  };
}

// Wrap the component to inject dispatch and state into it

export default connect(mapStateToProps, mapDispatchToProps)(SearchSongConnector);
