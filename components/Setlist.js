import React, { Component } from 'react';

import { POLLARD_ACTION } from '../constants/ActionTypes';
import flatten2Array from '../lib/flattenObjectToArray';

import Song from './Song';
import SelectedSong from './SelectedSong';
import AddSong from './AddSong';


export default class Setlist extends Component {

  render() {
    return (
      <div className="row">
				<ul className="list-group">
					<AddSong
						onAddSong={ this.props.onAddSong }
					/>
					{flatten2Array(this.props.songs).map((tuple, idx) =>
						(tuple[0] == this.props.selectedSong) ?
						<SelectedSong song={ tuple[1] }
							songId={ tuple[0] }
							selectedSong={ this.props.selectedSong }
							key={ idx }
							onUpdateSong={ this.props.onUpdateSong }
						/>:
						<Song song={ tuple[1] }
							songId={ tuple[0] }
							key={ idx }
							onSongClick={ this.props.onSongClick }
						/>
					)}
				</ul>
			</div>
    );
  }

}
