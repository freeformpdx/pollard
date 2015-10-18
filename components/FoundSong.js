import React, { Component } from 'react';

import AddFoundSong from './AddFoundSong';

import mergeStyles from '../lib/mergeStyles';

export default class FoundSong extends Component {

  render() {

		let releaseImgStyle = mergeStyles({
			width: '75',
			height: '75'
		});

		/*    TODO   */
		/* SHIT CODE */
		/* SHIT CODE */
		/* SHIT CODE */
		/* SHIT CODE */
		let album = this.props.song.album ? this.props.song.album  : 'Unknown Album';
		let date = this.props.song.date ? this.props.song.date: 'Unknown Date';

		// debugger;
    return (
			<li className="list-group-item">
				<div className="clearfix">
					<span className="pull-left">
						{ this.props.song.artist } - &nbsp;
						{ this.props.song.title } || &nbsp;
						{ album } - &nbsp;
						{ date } &nbsp; &nbsp;
						<img
							style={ releaseImgStyle }
							src={ this.props.song.img } />
					</span>
					<div className="pull-right">
						<AddFoundSong song={ this.props.song } />
					</div>
				</div>
			</li>
    );
  }

}
