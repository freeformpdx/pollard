import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  setPlaylistTitle,
  setPlaylistDescription,
  setPlaylistImg,
} from '../actions/Actions.js';

import mergeStyles from '../lib/mergeStyles';
import config from '../../env.js';

import PlaylistInfoEdit from './PlaylistInfoEdit.js';
import PlaylistInfoCollapsed from './PlaylistInfoCollapsed.js';

class PlaylistInfo extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const songStyle= mergeStyles({
      backgroundColor: '#D0D0D0'
    });

    return (
      <div className="row">
        <ul className="list-group">
          <li className="list-group-item clearfix song" style={ songStyle }>
            { this.state.open ?
              <PlaylistInfoEdit
                { ...this.props }
                toggleOpen={ this.toggleOpen.bind(this) }/> :
              <PlaylistInfoCollapsed
                { ...this.props }
                toggleOpen={ this.toggleOpen.bind(this) }/>
            }
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps({state}) {
  return {
    title: state.getIn(['data','setlist', 'title']),
    description: state.getIn(['data','setlist', 'description']),
    img: state.getIn(['data','setlist', 'img']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPlaylistTitle: bindActionCreators(setPlaylistTitle, dispatch),
    setPlaylistDescription: bindActionCreators(setPlaylistDescription, dispatch),
    setPlaylistImg: bindActionCreators(setPlaylistImg, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistInfo);
