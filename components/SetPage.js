import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/Actions.js';

import Setlist from './Setlist.js';

class SetPage extends Component {
  render() {
		const { dispatch, dataSongs, viewSong } = this.props;
		const songs = dataSongs.toJSON();

    return (
      <div>
				<h1>Pollard Set Page</h1>
				<Setlist
					songs= { songs }
					onSongClick={ (index) => 
						console.log('songSelected: ' + index)
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
