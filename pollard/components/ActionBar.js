import React, { Component } from 'react';
import moment from 'moment';
import 'moment-timezone';

import DeleteLink from './DeleteLink';

export default class ActionBar extends Component {
  convertTimestamp(timestamp) {
    return moment(timestamp)
      .tz("America/Los_Angeles")
      .format("M/D/YY h:m:sa");
  }

  render() {
    const {
      playedAt,
      songIdx,
      deleteSong,
    } = this.props;


    const playedAtDisplay = playedAt ?
      'Played At: ' + this.convertTimestamp(playedAt) :
      '';
    return (
      <div style={{ marginTop:10 }}>
        <div className="col-xs-12 col-sm-6" style={{marginBottom: 5}}>
          <small>{ playedAtDisplay }</small>
        </div>
        <div className="clearfix visible-xs"></div>
        <div
          className="col-xs-12 col-sm-6"
          style={{textAlign: 'right'}}>
          <DeleteLink
            songIdx={ songIdx }
            deleteSong={ deleteSong }/>
        </div>
      </div>
    );
  }
}
