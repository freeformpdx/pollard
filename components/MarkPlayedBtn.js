import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';


export default class MarkPlayedBtn extends Component {
	handleClick(event) {
		this.props.onMarkSongPlayed(this.props.songId);
	}

  render() {
		const gridStyle = mergeStyles({
			marginTop: 5
		});

		let btnText;
		let btnClass;
		let spanGlyph;

		if (this.props.isSongPlayed) {
			btnText = 'Played';
			btnClass = 'btn-warning';
			spanGlyph = 'glyphicon-volume-up';
		} else {
			btnText = 'Unplayed';
			btnClass = 'btn-primary';
			spanGlyph = 'glyphicon-volume-off';
		}

		let btnClasses = classNames(
			btnClass,
			"btn",
			"pull-right"
		);

		let spanClasses = classNames(
			"glyphicon",
			spanGlyph
		);

    return (
			<div className="col-xs-11 col-md-12" style={ gridStyle }>
				<button
					type="button"
					className={ btnClasses }
					onClick={ (e) => this.handleClick(e) }
					>
					<span
						className={ spanClasses }
						aria-hidden="true"></span> { btnText }
				</button>
			</div>
    );
  }
}
