import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';
import flatten2Array from '../lib/flattenObjectToArray';

import SongInput from './SongInput';
import MarkPlayedBtn from './MarkPlayedBtn';
import DeleteSongBtn from './DeleteSongBtn';


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

		let gridClasses = classNames(
			"col-xs-10",
			"col-xs-offset-1",
			"col-md-6",
			"col-md-offset-0"
		);

    return (
			<li className="list-group-item" style={ songStyle }>
				<div
					className="row">
					<div className={ gridClasses }>
						{ inputs }
					</div>
					<DeleteSongBtn
						songId={ this.props.songId }
						onDeleteSong={ this.props.onDeleteSong } />
					<MarkPlayedBtn
						songId={ this.props.songId }
						isSongPlayed={ this.props.song.played }
						onMarkSongPlayed={ this.props.onMarkSongPlayed } />
				</div>
			</li>
    );
  }

}
