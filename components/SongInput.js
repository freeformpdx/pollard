import React, { Component } from 'react';
import classNames from 'classnames';

import { POLLARD_ACTION } from '../constants/ActionTypes';
import mergeStyles from '../lib/mergeStyles';


export default class SongInput extends Component {
	handleChange(event) {
		this.props.onUpdateSong({
			id: this.props.songId,
			key: this.props.label,
			val: event.target.value
		});
	}

  render() {
		let gridClasses = classNames(
			"col-xs-10",
			"col-xs-offset-1",
			"col-md-6",
			"col-md-offset-0"
		);
		let gridStyle = mergeStyles({
			marginTop: 5
		});

		let labelId = "label-" + this.props.label;

    return (
			<div
				className={ gridClasses }
				style={ gridStyle }>
				<div className="input-group">
					<span
						className="input-group-addon"
						id={ labelId }>{ this.props.label }</span>
						<input
							type="text"
							className="form-control"
							aria-describedby={ labelId }
							value={ this.props.val }
							onChange={ (e) => this.handleChange(e) }
							/>
				</div>
			</div>
    );
  }
}
