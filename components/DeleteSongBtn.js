import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';


export default class DeleteSongBtn extends Component {
	handleClick(event) {
		this.props.onDeleteSong(this.props.songId);
	}

  render() {
		const gridStyle = mergeStyles({
			marginTop: 5
		});

    return (
			<div className="col-xs-11 col-md-12" style={ gridStyle }>
				<button
					type="button"
					className="btn btn-danger pull-right"
					onClick={ (e) => this.handleClick(e) }
					>
					<span
						className="glyphicon glyphicon-trash"
						aria-hidden="true"></span> Delete
				</button>
			</div>
    );
  }
}
