import React, { Component } from 'react';
import classNames from 'classnames';

import SongInput from './SongInput';
import MarkPlayedBtn from './MarkPlayedBtn';
import mergeStyles from '../lib/mergeStyles';
import flatten2Array from '../lib/flattenObjectToArray';


export default class SelectedSong extends Component {

  render() {
		let flatInputs = flatten2Array(this.props.song.inputs);
		let inputs = flatInputs.map((keyVal, index) => {
			return <SongInput
				label={ keyVal[0] }
				val={ keyVal[1] }
				songId={ this.props.songId }
				onUpdateSong={ this.props.onUpdateSong }
				key={ index }
				/>;
    });

		let songStyle= mergeStyles({
			backgroundColor: '#F6EBFA'
		});

    return (
			<li className="list-group-item" style={ songStyle }>
				<div
					className="row">
					{ inputs }
					<MarkPlayedBtn
						songId={ this.props.songId }
						isSongPlayed={ this.props.song.played }
						onMarkSongPlayed={ this.props.onMarkSongPlayed } />
				</div>
			</li>
    );
  }

}
