import React, { Component } from 'react';

export default class SearchSongButton extends Component {
  render() {
    const {
      isSearching,
      onClick,
    } = this.props;

    return (
      <button
        id="SearchSongButton"
        type="button"
        className="btn btn-primary col-xs-10 col-xs-offset-1 col-sm-2 col-sm-offset-1"
        onClick={ (e) => onClick(e) }>
        <span
          className="glyphicon glyphicon-search"
          aria-hidden="true"></span> { isSearching ? 'Searching...' : 'Search' }
      </button>
    );
  }

}
