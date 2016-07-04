import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';

import SongInput from './SongInput';
import TitleArtistLine from './TitleArtistLine';
import MarkPlayedBtn from './MarkPlayedBtn';
import ActionBar from './ActionBar';


export default class SelectedSong extends Component {

  handleClick() {
    this.props.deselectSong();
  }

  render() {
    const inputs = this.props.song.get('inputs').map((input, index) => {
      return <SongInput
        label={ input.get('name') }
        val={ input.get('value') }
        updateSong={ this.props.updateSong }
        key={ index }
        songIdx={ this.props.idx }/>;
    });

    const playedAt = this.props.song.get('playedAt');

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

    const imgSMStyle = {
      border: '1px solid black',
      padding: 12,
      height: 220,
      width: 220,
      marginLeft: 138,
    }

    return (
      <li id="SelectedSong" className="list-group-item clearfix song" style={ songStyle }> <TitleArtistLine
          song={ this.props.song }
          idx={ this.props.idx }
          deselectSong={ this.props.deselectSong }
          type='selected'
        />
        <div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />
        <MarkPlayedBtn
          idx={ this.props.idx }
          playingSongIdx={ this.props.playingSongIdx }
          isSelected={ true }
          isSongPlayed={ this.props.song.get('played') }
          markSongPlayed={ this.props.markSongPlayed } />
        <div className="clearfix"></div>
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
        <div className={ releaseImgSMClasses } style={{ marginTop: 10 }} />
        { this.props.song.get('img300px') ?
          <img
            className={ releaseImgSMClasses }
            style={ imgSMStyle }
            src={ this.props.song.get('img300px') } />
          : ""
        }
        <div className="clearfix"></div>
        <ActionBar
          songIdx={ this.props.idx }
          deleteSong={ this.props.deleteSong }
          playedAt={ playedAt }/>
      </li>
    );
  }

}
