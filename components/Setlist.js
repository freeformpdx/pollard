import React, { Component } from 'react';

import flatten2Array from '../lib/flattenObjectToArray';
import mergeStyles from '../lib/mergeStyles';

import SearchSong from './SearchSong';
import SelectedSong from './SelectedSong';
import Song from './Song';


export default class Setlist extends Component {
  render() {
		const noSongsStyle = mergeStyles({
			backgroundColor: '#F6EBFA'
		});

    return (
      <div className="row">
				<ul className="list-group">
					<SearchSong
						onSearchSong={ this.props.onSearchSong }
						onAddSong={ this.props.onAddSong } />
					{ (Object.keys(this.props.songs).length == 0) ?
						<li
							className="list-group-item"
							style={ noSongsStyle }
							>
							<div
								className="well"
								style={{textAlign: 'center'}}>
								⚡️ Search⚡️ Add Blank Song⚡️ <br/>
								🚀 Build 🎶 Setlist 🚀
							</div>
						</li> :
					'' }
					{flatten2Array(this.props.songs).map((tuple, idx) =>
						(tuple[0] == this.props.selectedSong) ?
						<SelectedSong song={ tuple[1] }
							songId={ tuple[0] }
							selectedSong={ this.props.selectedSong }
							key={ idx }
							onDeleteSong={ this.props.onDeleteSong }
							onMarkSongPlayed={ this.props.onMarkSongPlayed }
							onUpdateSong={ this.props.onUpdateSong } />:
						<Song song={ tuple[1] }
							songId={ tuple[0] }
							key={ idx }
							onDeleteSong={ this.props.onDeleteSong }
							onMarkSongPlayed={ this.props.onMarkSongPlayed }
							onSelectSong={ this.props.onSelectSong } />
					)}
				</ul>
			</div>
    );
  }

}
