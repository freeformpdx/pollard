import React, { Component } from 'react';
import classNames from 'classnames';

import { POLLARD_ACTION } from '../constants/ActionTypes';
import SongInput from './SongInput';
import MarkPlayedBtn from './MarkPlayedBtn';
import mergeStyles from '../lib/mergeStyles';
import flatten2Array from '../lib/flattenObjectToArray';


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
					<MarkPlayedBtn />
				</div>
			</li>
    );
  }

}
