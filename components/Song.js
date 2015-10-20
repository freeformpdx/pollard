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
			<li className="list-group-item clearfix" style={ songStyle }>
					<div
						onClick={ (e) => this.handleClick(e) }
						style={ {marginTop: 5, cursor:'pointer'} }
						className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
						{ this.props.song.inputs.title } - { this.props.song.inputs.artist }
					</div>
					<div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />
					<div className="col-xs-3" />
					<MarkPlayedBtn
						songId={ this.props.songId }
						isSongPlayed={ this.props.song.played }
						onMarkSongPlayed={ this.props.onMarkSongPlayed } />
			</li>
    );
  }

}
