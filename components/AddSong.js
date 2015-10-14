import React, { Component } from 'react';
import classNames from 'classnames';

import { POLLARD_ACTION } from '../constants/ActionTypes';
import SongInput from './SongInput';
import MarkPlayedBtn from './MarkPlayedBtn';
import mergeStyles from '../lib/mergeStyles';
import flatten2Array from '../lib/flattenObjectToArray';


export default class AddSong extends Component {
	handleClick(event) {
		this.props.onAddSong({});
	}


  render() {
		let songStyle= mergeStyles({
			backgroundColor: '#F6EBFA'
		});

    return (
			<li className="list-group-item" style={ songStyle }>
				<div className="row">
					<div className="col-xs-11 col-md-12">
						<button
							className="btn btn-primary pull-right"
							onClick={ (e) => this.handleClick(e) }>
							<span
								className="glyphicon glyphicon-plus"
								aria-hidden="true"></span> Add Song
						</button>
					</div>
				</div>
			</li>
    );
  }

}
