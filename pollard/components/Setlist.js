import React, { Component } from 'react';

import SearchSong from './SearchSong';
import AddedSongs from './AddedSongs';
import NewPlaylistInstructions from './NewPlaylistInstructions.js';


export default class Setlist extends Component {
  render() {
    const {
      lastSearchedSong,
      onAddSong,
      onArtistChange,
      onTitleChange,
      onDeleteSong,
      onMarkSongPlayed,
      onMoveSong,
      onSearchSong,
      onSelectSong,
      onUpdateSong,
      songs,
      selectedSong,
    } = this.props;

    return (
      <div className="row">
        <ul className="list-group">

          <SearchSong
            lastSearchedSong={ lastSearchedSong }
            onSearchSong={ onSearchSong }
            onAddSong={ onAddSong }
            onArtistChange={ onArtistChange }
            onTitleChange={ onTitleChange } />

          { (Object.keys(songs).length == 0) ? <NewPlaylistInstructions /> : '' }

          <AddedSongs
            onDeleteSong={ onDeleteSong }
            onMarkSongPlayed={ onMarkSongPlayed }
            onMoveSong={ onMoveSong }
            onSelectSong={ onSelectSong }
            onUpdateSong={ onUpdateSong }
            songs={ songs }
            selectedSong={ selectedSong }
          />

        </ul>
      </div>
    );
  }

}
