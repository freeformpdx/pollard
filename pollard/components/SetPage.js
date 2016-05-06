import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
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
            this.props.setSetlistId(setlist.id);
            this.props.history.pushState(null, '/setlist/' + setlist.id);
          });
        } else {
          console.log('trying to reload after initial load????');
        }
      } else {
        socket.emit('loadExistingSetlist', { id: this.props.params.id });
        socket.on('existingSetlistLoaded', ( {setlist} ) => {
          this.props.loadSetlistState(setlist);
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
      songs,
    } = this.props;
    const setStyle = mergeStyles({
      maxWidth: 720
    });

    return (
      <div style={ setStyle }>
        <Setlist songs={ songs }/>
      </div>
    );
  }
}

function mapStateToProps({state}) {
  return {
    songs: state.getIn(['data','setlist', 'songs']),
    viewSetlist: state.getIn(['view','setlist']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSetlistId: bindActionCreators(setSetlistId, dispatch),
    loadSetlistState: bindActionCreators(loadSetlistState, dispatch),
  };
}

// Wrap the component to inject dispatch and state into it

export default connect(mapStateToProps, mapDispatchToProps)(SetPage);
