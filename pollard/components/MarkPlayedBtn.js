import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';


export default class MarkPlayedBtn extends Component {
  handleClick(event) {
    this.props.onMarkSongPlayed(this.props.idx);
  }

  render() {
    const gridStyle = mergeStyles({
      marginTop: 5
    });

    let btnText;
    let btnClass;
    let spanGlyph;

    if (this.props.isSongPlayed) {
      btnText = 'Played';
      btnClass = 'btn-warning';
      spanGlyph = 'glyphicon-volume-up';
    } else {
      btnText = 'Play Song';
      btnClass = 'btn-primary';
      spanGlyph = 'glyphicon-volume-off';
    }
    if (this.props.idx == this.props.playingSongIdx) {
      btnText = 'Now Playing';
      btnClass = 'btn-success';
    }

    let btnClasses = classNames(
      btnClass,
      "btn",
      "col-xs-10",
      "col-xs-offset-1",
      "col-sm-2",
      "col-sm-offset-1"
    );

    let spanClasses = classNames(
      "glyphicon",
      spanGlyph
    );

    return (
        <button
          type="button"
          className={ btnClasses }
          onClick={ (e) => this.handleClick(e) }
          >
          <span
            className={ spanClasses }
            aria-hidden="true"></span> { btnText }
        </button>
    );
  }
}
