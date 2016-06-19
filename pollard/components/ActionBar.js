import React, { Component } from 'react';

import DeleteLink from './DeleteLink';


export default class ActionBar extends Component {
  render() {
    return (
      <div style={{ marginTop:10 }}>
        <div className="col-xs-12 col-sm-6" style={{marginBottom: 5}}>
          <small>ACTION BAR</small>
        </div>
        <div className="clearfix visible-xs"></div>
        <div
          className="col-xs-12 col-sm-6"
          style={{textAlign: 'right'}}>
          <DeleteLink
            songIdx={ this.props.songIdx }
            deleteSong={ this.props.deleteSong }/>
        </div>
      </div>
    );
  }
}
