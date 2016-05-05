import React, { Component } from 'react';

import SearchSong from './SearchSong';
import SelectedSong from './SelectedSong';
import Song from './Song';
import DraggableSong from './DraggableSong';
import NewPlaylistInstructions from './NewPlaylistInstructions.js';


export default class Setlist extends Component {
  getCurrentlyPlayingSongIdx() {
    for (var idx = 0; idx < this.props.songs.length; idx++) {
      if (this.props.songs[idx].played) {
        return idx;
      }
    }
    return -1;
  }

  render() {
    const playingSongIdx = this.getCurrentlyPlayingSongIdx();
    let playingSongIndicator = null;

    return (
      <div className="row">
				<ul className="list-group">
					<SearchSong
            lastSearchedSong={ this.props.lastSearchedSong }
						onSearchSong={ this.props.onSearchSong }
						onAddSong={ this.props.onAddSong }
						onArtistChange={ this.props.onArtistChange }
						onTitleChange={ this.props.onTitleChange } />

					{ (Object.keys(this.props.songs).length == 0) ? <NewPlaylistInstructions /> : '' }

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
                    playingSongIdx={ playingSongIdx }
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
                    playingSongIdx={ playingSongIdx }
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
