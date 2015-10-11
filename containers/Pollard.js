import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import Main from '../components/Main';
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
      <div>
        <Main app={app} actions={actions} />
      </div>
    );
  }
}
