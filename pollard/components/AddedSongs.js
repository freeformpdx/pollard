import React, { Component } from 'react';

import SelectedSong from './SelectedSong';
import Song from './Song';
import DraggableSong from './DraggableSong';


export default class AddedSongs extends Component {
  getCurrentlyPlayingSongIdx(songs) {
    for (var idx = 0; idx < songs.length; idx++) {
      if (songs[idx].played) {
        return idx;
      }
    }
    return -1;
  }

  render() {
    const {
      onDeleteSong,
      onMarkSongPlayed,
      onMoveSong,
      onSelectSong,
      onUpdateSong,
      songs,
      selectedSong,
    } = this.props;

    const playingSongIdx = this.getCurrentlyPlayingSongIdx(songs);

    return (
      <div>
      { songs.map((song, idx) => {
        if (idx == selectedSong) {
          return (
            <DraggableSong
              key={ idx }
              idx={ idx }
              onMoveSong={ onMoveSong }>

              <SelectedSong song={ song }
                selectedSong={ selectedSong }
                idx={ idx }
                playingSongIdx={ playingSongIdx }
                onDeleteSong={ onDeleteSong }
                onMarkSongPlayed={ onMarkSongPlayed }
                onUpdateSong={ onUpdateSong }/>

            </DraggableSong>
          );
        } else {
          return (
            <DraggableSong
              key={ idx }
              idx={ idx }
              onMoveSong={ onMoveSong }>

              <Song song={ song }
                key={ idx }
                idx={ idx }
                playingSongIdx={ playingSongIdx }
                onDeleteSong={ onDeleteSong }
                onMarkSongPlayed={ onMarkSongPlayed }
                onSelectSong={ onSelectSong }/>

            </DraggableSong>
          );
        }
      })}
      </div>
    );
  }
}
