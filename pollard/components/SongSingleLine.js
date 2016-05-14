import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';

import MarkPlayedBtn from './MarkPlayedBtn';


export default class SongSingleLine extends Component {

  handleClick(event) {
    this.props.selectSong(this.props.idx);
  }


  render() {
    let songStyle= mergeStyles({
      backgroundColor: '#D0D0D0'
    });

    const songTitle = this.props.song.get('inputs').filter(
      input => input.get('name') == 'title'
    ).first().get('value');

    const artistName = this.props.song.get('inputs').filter(
      input => input.get('name') == 'artist'
    ).first().get('value');

    return (
      <li className="list-group-item clearfix song" style={ songStyle }>
        <div
          onClick={ (e) => this.handleClick(e) }
          style={ {marginTop: 5, cursor:'pointer'} }
          className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 singleLineTitle">
          { songTitle } - { artistName }
        </div>
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
