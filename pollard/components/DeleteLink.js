import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';


export default class DeleteLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteStep: 0
    }
  }

  handleClick(event) {
    if (this.state.deleteStep == 0) {
      this.setState({deleteStep: 1});
    } else {
      this.props.deleteSong(this.props.songIdx);
      this.setState({deleteStep: 0});
    }
  }

render() {
  return (
    <a
      className="deleteButton"
      style={{marginLeft: 15}}
      onClick={ (e) => this.handleClick(e) }>
      <small>
        <span
          className="glyphicon glyphicon-trash"
          aria-hidden="true"></span> { this.state.deleteStep == 0 ? 'Delete' : 'Confirm' }
      </small>

    </a>
  );
  }
}
