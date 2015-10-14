import React, { Component } from 'react';
import classNames from 'classnames';

import { POLLARD_ACTION } from '../constants/ActionTypes';
import mergeStyles from '../lib/mergeStyles';


export default class MarkPlayedBtn extends Component {
	handleClick(event) {
		console.log('hit mark played button');
	}

  render() {
		let gridStyle = mergeStyles({
			marginTop: 5
		});

    return (
			<div className="col-xs-11 col-md-12" style={ gridStyle }>
				<button
					type="button"
					className="btn btn-primary pull-right"
					onClick={ (e) => this.handleClick(e) }
					>
					<span
						className="glyphicon glyphicon-volume-off"
						aria-hidden="true"></span> Mark Played
				</button>
			</div>
    );
  }
}
