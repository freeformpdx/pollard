import React, { Component } from 'react';

export default class TitleArtistLine extends Component {

  handleClick() {
    if (this.props.type === 'selected') {
      this.props.deselectSong();
    } else {
      this.props.selectSong(this.props.idx);
    }
  }

  render() {
    const songTitle = this.props.song.get('inputs').filter(
      input => input.get('name') == 'title'
    ).first().get('value');

    const artistName = this.props.song.get('inputs').filter(
      input => input.get('name') == 'artist'
    ).first().get('value');

    const glyphType = this.props.type === 'selected' ?
                      'glyphicon-triangle-bottom' :
                      'glyphicon-triangle-right' ;
    const glyphClassName = 'glyphicon ' + glyphType;

    return (
      <div
        onClick={ (e) => this.handleClick() }
        style={ {marginTop: 5, cursor:'pointer'} }
        className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 singleLineTitle">
         <span
          className={ glyphClassName }
          aria-hidden="true"></span> { songTitle } - { artistName }
       </div>
    );
  }

}
/*
 *
        <div
          onClick={ (e) => this.handleClick(e) }
          style={ {marginTop: 5, cursor:'pointer'} }
          className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 singleLineTitle">
           <span
            className="glyphicon glyphicon-triangle-right"
            aria-hidden="true"></span> { songTitle } - { artistName }
        </div>
 * */

