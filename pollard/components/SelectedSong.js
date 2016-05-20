import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';

import SongInput from './SongInput';
import MarkPlayedBtn from './MarkPlayedBtn';
import DeleteSongBtn from './DeleteSongBtn';


export default class SelectedSong extends Component {

  render() {
    const inputs = this.props.song.get('inputs').map((input, index) => {
      return <SongInput
        label={ input.get('name') }
        val={ input.get('value') }
        updateSong={ this.props.updateSong }
        key={ index }
        songIdx={ this.props.idx }/>;
    });

    const songStyle= mergeStyles({
      backgroundColor: '#D0D0D0'
    });

    const gridClasses = classNames(
      "col-xs-12",
      "col-sm-6"
    );

    const releaseImgBaseClasses = classNames(
      "col-xs-12"
    );

    const releaseImgXSClasses = classNames(
      releaseImgBaseClasses,
      "visible-xs-block"
    );

    const releaseImgSMClasses = classNames(
      "col-sm-4",
      "col-sm-offset-1",
      "hidden-xs"
    );

    return (
      <li id="SelectedSong" className="list-group-item clearfix song" style={ songStyle }>
          <div className={ gridClasses }>
            { inputs }
          </div>
          <div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />
          { this.props.song.get('img300px') ?
            <img
              className={ releaseImgXSClasses }
              src={ this.props.song.get('img300px') } />
            : ""
          }
          <div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />
          <DeleteSongBtn
            songIdx={ this.props.idx }
            deleteSong={ this.props.deleteSong } />
          <div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />
          <MarkPlayedBtn
            idx={ this.props.idx }
            playingSongIdx={ this.props.playingSongIdx }
            isSongPlayed={ this.props.song.get('played') }
            markSongPlayed={ this.props.markSongPlayed } />
          <div className={ releaseImgSMClasses } style={{ marginTop: 5 }} />
          { this.props.song.get('img300px') ?
            <img
              className={ releaseImgSMClasses }
              src={ this.props.song.get('img300px') } />
            : ""
          }
      </li>
    );
  }

}
