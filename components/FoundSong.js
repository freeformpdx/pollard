import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';
import flatten2Array from '../lib/flattenObjectToArray';


export default class FoundSong extends Component {

  render() {
		let songStyle= mergeStyles({
			backgroundColor: '#F6EBFA'
		});
		let album = 'Unknown Album';
		if (this.props.song.tracks[0]){
			debugger;
			album = this.props.song.tracks[0].album_name;
		} else {
			debugger;
		}
		let date = this.props.song.tracks[0] ?
			this.props.song.tracks[0].album_date :
			'Unknown Release Date';

    return (
			<li className="list-group-item">
				{ this.props.song.artist_name } - { this.props.song.title } |
				- { album } - { date }
			</li>
    );
  }

}
