import React, { Component, PropTypes } from 'react';

export default class PlaylistInfoCollapsed extends Component {
  render() {
    let title = this.props.title || "No Playlist Title";
    let description = this.props.description || "No Playlit Description";

    return (
      <div onClick={ this.props.toggleOpen }>
        <div style={{ overflow: 'hidden'}} className="col-xs-6">
          <span style={{whiteSpace: 'nowrap'}}>{ title }</span>
          <br/>
          <span style={{whiteSpace: 'nowrap'}}>{ description }</span>
        </div>
        <div className="col-xs-3">
          { this.props && <img style={{ maxHeight: 64, maxWidth: 64}} src={this.props.img}/> }
        </div>
        <div
          className="col-xs-3"
          style={{textAlign: 'right'}}>
          <a
            className="hideButton"
            onClick={ this.props.toggleOpen }
            style={{marginLeft: 15, cursor: 'default'}}>
            <small>
              <span
                className="glyphicon glyphicon-triangle-bottom"
                aria-hidden="true"></span> Edit
            </small>
          </a>
        </div>
      </div>
    );
  }
}
