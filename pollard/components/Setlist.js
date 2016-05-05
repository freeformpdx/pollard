import React, { Component } from 'react';

import SearchSong from './SearchSong';
import AddedSongs from './AddedSongs';
import NewPlaylistInstructions from './NewPlaylistInstructions.js';


export default class Setlist extends Component {
  getCurrentlyPlayingSongIdx() {
    for (var idx = 0; idx < this.props.songs.length; idx++) {
      if (this.props.songs[idx].played) {
        return idx;
      }
    }
    return -1;
  }

  render() {
    const playingSongIdx = this.getCurrentlyPlayingSongIdx();

    return (
      <div className="row">
        <ul className="list-group">
          <SearchSong
            lastSearchedSong={ this.props.lastSearchedSong }
            onSearchSong={ this.props.onSearchSong }
            onAddSong={ this.props.onAddSong }
            onArtistChange={ this.props.onArtistChange }
            onTitleChange={ this.props.onTitleChange } />

          { (Object.keys(this.props.songs).length == 0) ? <NewPlaylistInstructions /> : '' }

          <AddedSongs {...this.props} />

        </ul>
      </div>
    );
  }

}
