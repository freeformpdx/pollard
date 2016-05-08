import React, { Component } from 'react';

import DraggableSong from './DraggableSong';


export default class AddedSongsDisplay extends Component {
  getCurrentlyPlayingSongIdx(songs) {
    for (var idx = 0; idx < songs.size; idx++) {
      if (songs.getIn([idx, 'played'])) {
        return idx;
      }
    }
    return -1;
  }

  render() {
    const {
      songs,
      ...rest,
    } = this.props;

    const playingSongIdx = this.getCurrentlyPlayingSongIdx(songs);

    return (
      <div>
      { songs.map((song, idx) => {
          return (
            <DraggableSong
              key={ song.get('_id') }
              idx={ idx }
              playingSongIdx={ playingSongIdx }
              song={ song }
              {...rest} />
         );
      })}
      </div>
    );
  }
}
