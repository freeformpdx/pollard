import React, { Component } from 'react';

import mergeStyles from '../lib/mergeStyles';

import SearchSong from './SearchSong';
import SelectedSong from './SelectedSong';
import Song from './Song';
import DraggableSong from './DraggableSong';


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
					{this.props.songs.map((song, idx) => {
						if (idx == this.props.selectedSong) {
							return (
								<DraggableSong
									key={ idx }
									idx={ idx }
									onMoveSong={ this.props.onMoveSong }>
									<SelectedSong song={ song }
										selectedSong={ this.props.selectedSong }
										idx={ idx }
										onDeleteSong={ this.props.onDeleteSong }
										onMarkSongPlayed={ this.props.onMarkSongPlayed }
										onUpdateSong={ this.props.onUpdateSong }/>
								</DraggableSong>
							);
						} else {
							return (
								<DraggableSong
									key={ idx }
									idx={ idx }
									onMoveSong={ this.props.onMoveSong }>
									<Song song={ song }
										key={ idx }
										idx={ idx }
										onDeleteSong={ this.props.onDeleteSong }
										onMarkSongPlayed={ this.props.onMarkSongPlayed }
										onSelectSong={ this.props.onSelectSong }/>
								</DraggableSong>
							);
						}
					})}
				</ul>
			</div>
    );
  }

}
