import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';

import MarkPlayedBtn from './MarkPlayedBtn';
import TitleArtistLine from './TitleArtistLine';


export default class SongSingleLine extends Component {

  render() {
    let songStyle= mergeStyles({
      backgroundColor: '#D0D0D0'
    });

    return (
      <li className="list-group-item clearfix song" style={ songStyle }>
        <TitleArtistLine
          song={ this.props.song }
          selectSong={ this.props.selectSong }
          idx={ this.props.idx }
          type='unselected'
        />
        <div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />
        <div className="col-xs-3" />
        <MarkPlayedBtn
          idx={ this.props.idx }
          playingSongIdx={ this.props.playingSongIdx }
          isSongPlayed={ this.props.song.get('played') }
          markSongPlayed={ this.props.markSongPlayed } />
      </li>
    );
  }

}
