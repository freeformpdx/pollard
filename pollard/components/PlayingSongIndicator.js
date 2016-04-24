import React, { Component } from 'react';


export default class PlayingSongIndicator extends Component {
  render() {
    if (this.props.idx == this.props.playingSongIdx ) {
      return (
        <div>
          U JABRONI
        </div>
      );
    }
    return null;
  }
}
