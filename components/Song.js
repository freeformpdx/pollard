import React, { Component } from 'react';

import { POLLARD_ACTION } from '../constants/ActionTypes';

export default class Song extends Component {
  constructor() {
		super();
  }

  render() {
    return (
      <div><pre>{ JSON.stringify(this.props, null, 2) }</pre></div>
    );
  }
}
