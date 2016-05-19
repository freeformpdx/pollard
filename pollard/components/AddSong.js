import React, { Component } from 'react';

import guid from '../lib/guid';
import mergeStyles from '../lib/mergeStyles';

export default class AddSong extends Component {
  handleBlankSongClick(event) {
    const title = this.props.lastSearchedSong.get('title') ?
                  this.props.lastSearchedSong.get('title') :
                  '';
    const artist= this.props.lastSearchedSong.get('artist') ?
                  this.props.lastSearchedSong.get('artist') :
                  '';

    this.props.addSong({
      inputs: [{
        name: 'title',
        value: title,
      }, {
        name: 'artist',
        value: artist,
      }],
      clientID: guid(),
    });
    this.props.clearSongs();
  }

  handleAirBreakClick(event) {
    this.props.addSong({
      inputs: [{
        name: 'title',
        value: 'KFFP 90.3',
      }, {
        name: 'artist',
        value: 'freeformportland.org',
      }],
      clientID: guid(),
    });
    this.props.clearSongs();
  }


  render() {
    let songStyle= mergeStyles({
      backgroundColor: '#D0D0D0'
    });

    return (
      <div
        className="dropdown col-xs-10 col-xs-offset-1 col-sm-2"
        style={{padding:0}}>
          <button
            id="AddDropdown"
            className="btn btn-primary col-xs-12"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">
              <span
                className="glyphicon glyphicon-plus"
                aria-hidden="true"></span> Add <span className="caret"></span>
          </button>

        <ul className="dropdown-menu" aria-labelledby="AddDropdown">
          <li>
            <a
              style={{cursor: 'pointer'}}
              onClick={ (e) => this.handleBlankSongClick(e) }>
              Blank Song
            </a>
          </li>
          <li>
            <a
              style={{cursor: 'pointer'}}
              onClick={ (e) => this.handleAirBreakClick(e) }>
              Air Break
            </a>
          </li>
        </ul>
      </div>
    );
  }

}
