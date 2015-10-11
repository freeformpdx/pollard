import React, { Component } from 'react';
import classNames from 'classnames';

import { POLLARD_ACTION } from '../constants/ActionTypes';
import SongInput from './SongInput';
import MarkPlayedBtn from './MarkPlayedBtn';
import flatten2Array from '../lib/flattenObjectToArray';


export default class Song extends Component {
	handleClick(event) {
		console.log('hit song click');
	}


  render() {
		let flatInputs = flatten2Array(this.props.song.inputs);
		let inputs = flatInputs.map((keyVal, index) => {
			return <SongInput
				label={ keyVal[0] }
				val={ keyVal[1] }
				key={ index }
				/>;
    });

    return (
			<li className="list-group-item">
				<div
					onClick={ (e) => this.handleClick(e) }
					className="row">
					{ inputs }
					<MarkPlayedBtn />
				</div>
			</li>
    );
  }

}
