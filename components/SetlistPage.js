import React, { Component, PropTypes } from 'react';

import Setlist from './Setlist.js';

import { POLLARD_ACTION } from '../constants/ActionTypes';

export default class SetlistPage extends Component {
  constructor() {
		super();
  }

  render() {
    return (
      <div>
				<h1>Pollard Setlist Page</h1>
				<Setlist
					songs={[{
						title: 'tracy\'s jacks',
						artist: 'blurry',
						album: 'parklifes',
						label: 'label 5',
						year: '1996',
						notes: 'it\'s a good song!',
						played: true,
					}, {
						title: 'Ride the Ligtening',
						artist: 'Metalica',
						album: 'Minister of Puppets',
						label: 'Label #420',
						year: '1987',
						notes: 'bang yr head',
						played: true,
					}, {
						title: 'india was an angel',
						artist: 'guiding by voices',
						album: 'king ship && the golden boyz',
						label: 'scat records',
						year: '1993',
						notes: 'sweet spots 4 you',
						played: true,
					}]}
					onSongClick={ (index) => 
						console.log('songSelected: ' + index)
					}
				/>
			</div>
    );
  }
}

/*
SCRATCH SPACE
						title: '',
						artist: '',
						album: '',
						label: '',
						year: '',
						notes: '',
						played: '',
*/
