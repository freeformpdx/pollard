import React, { Component } from 'react';
import classNames from 'classnames';

import { POLLARD_ACTION } from '../constants/ActionTypes';
import SongInput from './SongInput';
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

		let styles = {
			songContainer: {
			}
		};

		let classes = classNames(
			"col-xs-12",
			"col-md-10",
			"col-md-offset-1"
		);

    return (
      <div
				className={ classes }
				style={ styles.songContainer }
				onClick={ (e) => this.handleClick(e) }>
				<div className="panel panel-default">
					<div className="panel-body">
						<div className="row">
							{ inputs }
						</div>
					</div>
				</div>
			</div>
    );
  }

}
