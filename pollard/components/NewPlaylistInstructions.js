import React, { Component } from 'react';

import mergeStyles from '../lib/mergeStyles';

export default class NewPlaylistInstructions extends Component {
  render() {
    const newPlaylistStyle = mergeStyles({
      backgroundColor: '#F6EBFA'
    });

    return (
      <li
        id="NewPlaylistInstructions"
        className="list-group-item"
        style={ newPlaylistStyle }>

        <div
          className="well"
          style={{textAlign: 'center'}}>

          ⚡️ Search⚡️ Add Blank Song⚡️ <br/>
          🚀 Build 🎶 Playlist 🚀

        </div>

      </li>
    );
  }
}
