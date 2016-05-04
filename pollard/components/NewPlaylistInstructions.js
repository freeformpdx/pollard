import React, { Component } from 'react';

import mergeStyles from '../lib/mergeStyles';

export default class NewPlaylistInstructions extends Component {
  render() {
    const noSongsStyle = mergeStyles({
      backgroundColor: '#F6EBFA'
    });

    return (
      <li
        className="list-group-item"
        style={ noSongsStyle }>

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
