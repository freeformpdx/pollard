import React, { Component } from 'react';

import SelectedSong from './SelectedSong';
import Song from './Song';
import DraggableSong from './DraggableSong';


export default class AddedSongsDisplay extends Component {
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
      deleteSong,
      markSongPlayed,
      moveSong,
      selectSong,
      updateSong,
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
              moveSong={ moveSong }>

              <SelectedSong song={ song }
                selectedSong={ selectedSong }
                idx={ idx }
                playingSongIdx={ playingSongIdx }
                deleteSong={ deleteSong }
                markSongPlayed={ markSongPlayed }
                updateSong={ updateSong }/>

            </DraggableSong>
          );
        } else {
          return (
            <DraggableSong
              key={ idx }
              idx={ idx }
              moveSong={ moveSong }>

              <Song song={ song }
                key={ idx }
                idx={ idx }
                playingSongIdx={ playingSongIdx }
                deleteSong={ deleteSong }
                markSongPlayed={ markSongPlayed }
                selectSong={ selectSong }/>

            </DraggableSong>
          );
        }
      })}
      </div>
    );
  }
}
