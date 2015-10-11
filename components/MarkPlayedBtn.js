import React, { Component } from 'react';
import classNames from 'classnames';

import { POLLARD_ACTION } from '../constants/ActionTypes';
import mergeStyles from '../lib/mergeStyles';


export default class MarkPlayedBtn extends Component {
	handleChange(event) {
		console.log('hit input change');
	}

  render() {
		let gridStyle = mergeStyles({
			marginTop: 5
		});

    return (
			<div className="col-xs-11 col-md-12" style={ gridStyle }>
				<button
					type="button"
					className="btn btn-primary btn-lg pull-right">
					<span
						className="glyphicon glyphicon-volume-off"
						aria-hidden="true"></span> Mark Played
				</button>
			</div>
    );
  }
}
