import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import SetPage from '../components/SetPage';
import * as Actions from '../actions/Actions';


export default class Pollard extends Component {
  render() {

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
