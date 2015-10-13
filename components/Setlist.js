import React, { Component } from 'react';

import { POLLARD_ACTION } from '../constants/ActionTypes';
import Song from './Song';
import flatten2Array from '../lib/flattenObjectToArray';

export default class Setlist extends Component {

  render() {
    return (
      <div className="row">
				<ul className="list-group">
					{flatten2Array(this.props.songs).map((tuple, idx) =>
						<Song song={ tuple[1] }
							songId={ tuple[0] }
							key={ idx }
							onClick={() => this.props.onSongClick(index)}
						/>)}
				</ul>
			</div>
    );
  }

}
