import React, { Component } from 'react';

import SearchSong from './SearchSong';
import AddedSongs from './AddedSongs';
import NewPlaylistInstructions from './NewPlaylistInstructions.js';


export default class Setlist extends Component {
  render() {
    const {
      songs,
    } = this.props;

    return (
      <div className="row">
        <ul className="list-group">
          <SearchSong/>
          {
            (Object.keys(songs).length == 0) ?
            <NewPlaylistInstructions /> :
            ''
          }
          <AddedSongs />
        </ul>
      </div>
    );
  }

}
