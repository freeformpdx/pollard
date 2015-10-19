import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectSong, updateSong,
		addSong, searchSong,
		markSongPlayed, deleteSong
} from '../actions/Actions.js';

import mergeStyles from '../lib/mergeStyles';

import Setlist from './Setlist.js';

class SetPage extends Component {
  render() {
		const { dispatch, dataSongs, viewSong } = this.props;
		const songs = dataSongs.toJSON();
		const selectedSong = viewSong.get('selected');
		const setStyle= mergeStyles({
			maxWidth: 720
		});


    return (
      <div style={ setStyle }>
				<h1>Pollard Set Page</h1>
				<Setlist
					songs={ songs }
					selectedSong={ selectedSong }
					onSelectSong={ (songId) => 
            dispatch(selectSong(songId))
					}
					onUpdateSong={ (song) => 
            dispatch(updateSong(song))
					}
					onAddSong={ (song) => 
            dispatch(addSong(song))
					}
					onSearchSong={ (song) => 
            dispatch(searchSong(song))
					}
					onMarkSongPlayed={ (songId) => 
            dispatch(markSongPlayed(songId))
					}
					onDeleteSong={ (songId) => 
            dispatch(deleteSong(songId))
					}
				/>
			</div>
    );
  }
}

function select({state}) {
  return {
    dataSongs: state.getIn(['data','songs']),
    viewSong: state.getIn(['view','song'])
  };
}

// Wrap the component to inject dispatch and state into it

export default connect(select)(SetPage);
