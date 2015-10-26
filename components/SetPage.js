import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectSong, updateSong,
		addSong, searchSong,
		markSongPlayed, deleteSong,
		setSetlistId
} from '../actions/Actions.js';

import mergeStyles from '../lib/mergeStyles';
import config from '../pollard.config';

import Setlist from './Setlist.js';

class SetPage extends Component {
	socketIOevents() {
			var socket = require('socket.io-client')(config().socketUrl);
			socket.emit('loadNew');
			socket.on('newSetlistCreated', (setlist) => {
				this.props.dispatch(setSetlistId(setlist.id));
			});
	}

	componentDidMount() {
		this.socketIOevents();
	}

  render() {

		const { dispatch, dataSongs, viewSong, viewSetlist } = this.props;
		const songs = dataSongs.toJSON();
		const selectedSong = viewSong.get('selected');
		const setlistId = viewSetlist.get('id');
		const setStyle = mergeStyles({
			maxWidth: 720
		});


    return (
      <div style={ setStyle }>
				<h1>Pollard Set Page</h1>
				<Setlist
					songs={ songs }
					selectedSong={ selectedSong }
					setlistId={ setlistId }
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
    viewSong: state.getIn(['view','song']),
    viewSetlist: state.getIn(['view','setlist'])
  };
}

// Wrap the component to inject dispatch and state into it

export default connect(select)(SetPage);
