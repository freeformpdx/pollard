import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';

import MarkPlayedBtn from './MarkPlayedBtn';
import DeleteSongBtn from './DeleteSongBtn';


export default class Song extends Component {
	handleClick(event) {
		this.props.onSongClick(this.props.songId);
	}


  render() {
		let songStyle= mergeStyles({
			backgroundColor: '#F6EBFA'
		});

    return (
			<li className="list-group-item" style={ songStyle }>
				<div
					onClick={ (e) => this.handleClick(e) }
					className="row">
					{ this.props.song.inputs.title } - 
					{ this.props.song.inputs.artist }
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
