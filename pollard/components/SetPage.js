import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addSong,
  searchSong,
  artistChange,
  titleChange,
  setSetlistId,
  loadSetlistState
} from '../actions/Actions.js';

import mergeStyles from '../lib/mergeStyles';
import config from '../../env.js';

import Setlist from './Setlist.js';

class SetPage extends Component {
  socketIOevents() {
      const socket = require('socket.io-client')(config.SOCKET_URL);
      const urlSetlistId = this.props.params.id;
      if (typeof urlSetlistId == 'undefined') {
        if (!this.props.viewSetlist.get('id')) {
          socket.emit('loadNewSetlist');
          socket.on('newSetlistCreated', (setlist) => {
            this.props.actions.setSetlistId(setlist.id);
            this.props.history.pushState(null, '/setlist/' + setlist.id);
          });
        } else {
          console.log('trying to reload after initial load????');
        }
      } else {
        socket.emit('loadExistingSetlist', { id: this.props.params.id });
        socket.on('existingSetlistLoaded', ( {setlist} ) => {
          this.props.actions.loadSetlistState(setlist);
        });
      }
  }

  componentDidMount() {
    this.socketIOevents();
  }

  componentWillReceiveProps(nextProps) {
    const setlistId = nextProps.routeParams.id || nextProps.viewSetlist.get('id');

    if (setlistId && !nextProps.routeParams.id) {
      nextProps.history.pushState(null, '/setlist/' + setlistId);
    }
  }

  render() {

    const {
      lastSearchedSong,
      songsList,
      viewSong,
      viewSetlist,
    } = this.props;

    const songs = songsList.toJSON();

    const setlistId = this.props.routeParams.id || viewSetlist.get('id');

    const setStyle = mergeStyles({
      maxWidth: 720
    });

    return (
      <div style={ setStyle }>
        <Setlist
          songs={ songs }
          setlistId={ setlistId }
          lastSearchedSong={ lastSearchedSong }
          onAddSong={ (song) => 
            this.props.actions.addSong(song)
          }
          onSearchSong={ (artist, title) => 
            this.props.actions.searchSong(artist, title)
          }
          onArtistChange={ (artist) => 
            this.props.actions.artistChange(artist)
          }
          onTitleChange={ (title) => 
            this.props.actions.titleChange(title)
          }
        />
      </div>
    );
  }
}

function mapStateToProps({state}) {
  return {
    songsList: state.getIn(['data','setlist', 'songs']),
    viewSong: state.getIn(['view','song']),
    viewSetlist: state.getIn(['view','setlist']),
    lastSearchedSong: state.getIn(['view', 'search'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        addSong,
        searchSong,
        artistChange,
        titleChange,
        setSetlistId,
        loadSetlistState
      },
      dispatch
    )
  };
}

// Wrap the component to inject dispatch and state into it

export default connect(mapStateToProps, mapDispatchToProps)(SetPage);
