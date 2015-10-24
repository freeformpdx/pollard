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
		let album = this.props.song.album ?
			this.props.song.album :
			'Unknown Album';
		let date = this.props.song.date ?
			this.props.song.date :
			'Unknown Date';

    return (
			<li className="list-group-item">
				<div className="clearfix">
					<div className="col-xs-6 col-sm-3">
						{ this.props.song.artist } <br/>
						{ this.props.song.title } <br/>
						{ album } <br/>
						{ date } <br/>
					</div>
					<div className="col-xs-6 col-sm-3">
						{ this.props.song.img300px ?
						<img
							style={ releaseImgStyle }
							src={ this.props.song.img300px } />
						: "" }
					</div>
						<AddFoundSong
							song={ this.props.song }
							onClearSongs={ this.props.onClearSongs }
							onAddSong={ this.props.onAddSong }/>
				</div>
			</li>
    );
  }

}
