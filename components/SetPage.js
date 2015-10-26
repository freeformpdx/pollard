import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
	selectSong,
	updateSong,
	addSong,
	searchSong,
	markSongPlayed,
	deleteSong,
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
				this.props.actions.setSetlistId(setlist.id);
			});
	}

	componentDidMount() {
		this.socketIOevents();
	}

  render() {

		const { dataSongs, viewSong, viewSetlist } = this.props;
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
            this.props.actions.selectSong(songId)
					}
					onUpdateSong={ (song) => 
            this.props.actions.updateSong(song)
					}
					onAddSong={ (song) => 
            this.props.actions.addSong(song)
					}
					onSearchSong={ (song) => 
            this.props.actions.searchSong(song)
					}
					onMarkSongPlayed={ (songId) => 
            this.props.actions.markSongPlayed(songId)
					}
					onDeleteSong={ (songId) => 
            this.props.actions.deleteSong(songId)
					}
				/>
			</div>
    );
  }
}

function mapStateToProps({state}) {
  return {
    dataSongs: state.getIn(['data','songs']),
    viewSong: state.getIn(['view','song']),
    viewSetlist: state.getIn(['view','setlist'])
  };
}

function mapDispatchToProps(dispatch) {
	return { 
		actions: bindActionCreators(
			{
				selectSong,
				updateSong,
				addSong,
				searchSong,
				markSongPlayed,
				deleteSong,
				setSetlistId
			},
			dispatch
		)
	};
}

// Wrap the component to inject dispatch and state into it

export default connect(mapStateToProps, mapDispatchToProps)(SetPage);
