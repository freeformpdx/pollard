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
				<button
					type="button"
					className="btn btn-danger col-xs-10 col-xs-offset-1 col-sm-2 col-sm-offset-1"
					onClick={ (e) => this.handleClick(e) }
					>
					<span
						className="glyphicon glyphicon-trash"
						aria-hidden="true"></span> Delete
				</button>
    );
  }
}
