import React, { Component } from 'react';

import { POLLARD_ACTION } from '../constants/ActionTypes';
import Song from './Song';

export default class Setlist extends Component {
  constructor() {
		super();
  }

  render() {

		
    return (
      <div>
				Setlist Component
        {this.props.songs.map((song, index) =>
          <Song {...song}
                key={index}
                onClick={() => this.props.onSongClick(index)} />
        )}
			</div>
    );
  }
}
