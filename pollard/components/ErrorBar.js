import React, { Component } from 'react';

export default class ErrorBar extends Component {

  render() {
    const { error } = this.props;

    if (!error) {
      return <div/>;
    }

    return (
      <div className="alert alert-danger row" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <span className="sr-only">Error:</span>
        <span style={{ marginLeft: 5 }}>{ error }</span>
      </div>
    );
  }

}
