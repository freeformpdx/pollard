import React, { Component } from 'react';

import mergeStyles from '../lib/mergeStyles';

export default class AddSong extends Component {
	handleClick(event) {
		this.props.onAddSong({});
	}


  render() {
		let songStyle= mergeStyles({
			backgroundColor: '#F6EBFA'
		});

    return (
			<button
				className="btn btn-primary col-xs-12 col-sm-2 pull-right"
				onClick={ (e) => this.handleClick(e) }>
				<span
					className="glyphicon glyphicon-plus"
					aria-hidden="true"></span> Blank Song
			</button>
    );
  }

}
