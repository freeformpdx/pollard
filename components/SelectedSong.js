import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';
import flatten2Array from '../lib/flattenObjectToArray';

import SongInput from './SongInput';
import MarkPlayedBtn from './MarkPlayedBtn';
import DeleteSongBtn from './DeleteSongBtn';


export default class SelectedSong extends Component {

  render() {
		const flatInputs = flatten2Array(this.props.song.inputs);
		const inputs = flatInputs.map((keyVal, index) => {
			return <SongInput
				label={ keyVal[0] }
				val={ keyVal[1] }
				songId={ this.props.songId }
				onUpdateSong={ this.props.onUpdateSong }
				key={ index }
				/>;
    });

		const songStyle= mergeStyles({
			backgroundColor: '#F6EBFA'
		});

		const gridClasses = classNames(
			"col-xs-12",
			"col-sm-6"
		);

		const releaseImgBaseClasses = classNames(
			"col-xs-12"
		);

		const releaseImgXSClasses = classNames(
			releaseImgBaseClasses,
			"visible-xs-block"
		);

		const releaseImgSMClasses = classNames(
			"col-sm-4",
			"col-sm-offset-1",
			"hidden-xs"
		);

    return (
			<li className="list-group-item clearfix" style={ songStyle }>
					<div className={ gridClasses }>
						{ inputs }
					</div>
					<div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />
					{ this.props.song.img300px ?
						<img
							className={ releaseImgXSClasses }
							src={ this.props.song.img300px } />
						: ""
					}
					<div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />
					<DeleteSongBtn
						songId={ this.props.songId }
						onDeleteSong={ this.props.onDeleteSong } />
					<div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />
					<MarkPlayedBtn
						songId={ this.props.songId }
						isSongPlayed={ this.props.song.played }
						onMarkSongPlayed={ this.props.onMarkSongPlayed } />
					<div className={ releaseImgSMClasses } style={{ marginTop: 5 }} />
					{ this.props.song.img300px ?
						<img
							className={ releaseImgSMClasses }
							src={ this.props.song.img300px } />
						: ""
					}
			</li>
    );
  }

}
