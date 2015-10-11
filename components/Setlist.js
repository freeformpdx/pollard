import React, { Component } from 'react';

import { POLLARD_ACTION } from '../constants/ActionTypes';
import Song from './Song';

export default class Setlist extends Component {

  render() {
    return (
      <div className="row">
        {this.props.songs.map((song, index) =>
          <Song song={song}
						key={index}
						onClick={() => this.props.onSongClick(index)}
					/>
        )}
			</div>
    );
  }

}
