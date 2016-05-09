import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';


export default class DeleteSongBtn extends Component {
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
  const gridStyle = mergeStyles({
    marginTop: 5
  });

  return (
    <button
      type="button"
      className="deleteButton btn btn-danger col-xs-10 col-xs-offset-1 col-sm-2 col-sm-offset-1"
      onClick={ (e) => this.handleClick(e) }>

      <span
        className="glyphicon glyphicon-trash"
        aria-hidden="true"></span> { this.state.deleteStep == 0 ? 'Delete' : 'Confirm' }

    </button>
  );
  }
}
