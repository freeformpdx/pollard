import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';

import { POLLARD_ACTION } from '../constants/ActionTypes';
import Setlist from './Setlist.js';
import mergeStyles from '../lib/mergeStyles';

export default class SetPage extends Component {

  render() {
		let songs = [{
			inputs: {
				title: 'tracy\'s jacks',
				artist: 'blurry',
				album: 'parklifes',
				label: 'label 5',
				year: '1996',
				notes: 'it\'s a good song!',
			},
			played: true
		}, {
			inputs: {
				title: 'Ride the Ligtening',
				artist: 'Metalica',
				album: 'Minister of Puppets',
				label: 'Label #420',
				year: '1987',
				notes: 'bang yr head',
			},
			played: true,
		}, {
			inputs: {
				title: 'india was an angel',
				artist: 'guiding by voices',
				album: 'king ship && the golden boyz',
				label: 'scat records',
				year: '1993',
				notes: 'sweet spots 4 you',
			},
			played: true,
		}];

    return (
      <div>
				<h1>Pollard Set Page</h1>
				<Setlist
					songs= { songs }
					onSongClick={ (index) => 
						console.log('songSelected: ' + index)
					}
				/>
			</div>
    );
  }

}
