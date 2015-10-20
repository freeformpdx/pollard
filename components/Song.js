import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';

import MarkPlayedBtn from './MarkPlayedBtn';
import DeleteSongBtn from './DeleteSongBtn';


export default class Song extends Component {
	handleClick(event) {
		this.props.onSelectSong(this.props.songId);
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
					<div
						style={ {marginTop: 5} }
						className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
						{ this.props.song.inputs.title } - { this.props.song.inputs.artist }
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
