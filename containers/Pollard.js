import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import SetlistPage from '../components/SetlistPage';
import * as Actions from '../actions/Actions';

export default class Pollard extends Component {
  render() {
    return (
      <Connector select={state => ({ state: state })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ app, dispatch }) {
    const actions = bindActionCreators(Actions, dispatch);
    return (
      <div className="container">
        <SetlistPage app={app} actions={actions} />
      </div>
    );
  }
}
