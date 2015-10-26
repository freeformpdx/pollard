import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import SetPage from '../components/SetPage';
import * as Actions from '../actions/Actions';

import config from '../pollard.config';

export default class Pollard extends Component {
  render() {
		var socket = require('socket.io-client')(config().socketUrl);

    return (
      <Connector select={state => ( state )}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ app, dispatch }) {
    const actions = bindActionCreators(Actions, dispatch);
    return (
      <div className="container">
        <SetPage app={app} actions={actions} />
      </div>
    );
  }
}
