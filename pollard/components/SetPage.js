import 'whatwg-fetch';
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
import ErrorBar from './ErrorBar.js';

class SetPage extends Component {
  fetchSetlist() {
    const urlSetlistId = this.props.params.id;
    if (typeof urlSetlistId == 'undefined') {
      if (!this.props.viewSetlist.get('id')) {
        const loadNewSetlistUrl = 'http://' + config.API_URL + '/api/loadNewSetlist';
        fetch(loadNewSetlistUrl)
        .then((res) => {
          if (!res.ok) {
            const errMsg = "Failed to load new setlist";
            throw Error(errMsg);
          }
          return res.json();
        }).then((res) => {
          this.props.setSetlistId(res.id);
          this.props.history.pushState(null, '/setlist/' + res.id);
        })
      } else {
        console.log('trying to reload after initial load????');
      }
    } else {
      const loadExistingSetlistUrl = 'http://' + config.API_URL + '/api/loadExistingSetlist';
      const body = JSON.stringify({
        id: this.props.params.id
      });
      fetch(loadExistingSetlistUrl, {
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        method: "POST",
        body,
      })
      .then((res) => {
        if (!res.ok) {
          const errMsg = "Failed to load existing setlist";
          throw Error(errMsg);
        }
        return res.json();
      }).then((res) => {
        if (res.error) {
          throw Error(res.error);
        } else {
          this.props.loadSetlistState(res.setlist);
        }
      })
    }
  }

  componentDidMount() {
    this.fetchSetlist();
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
      error,
    } = this.props;
    const setStyle = mergeStyles({
      maxWidth: 720
    });

    return (
      <div style={ setStyle }>
        <ErrorBar error={ error }/>
        <Setlist songs={ songs }/>
      </div>
    );
  }
}

function mapStateToProps({state}) {
  return {
    songs: state.getIn(['data','setlist', 'songs']),
    viewSetlist: state.getIn(['view','setlist']),
    error: state.getIn(['view','error']),
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
