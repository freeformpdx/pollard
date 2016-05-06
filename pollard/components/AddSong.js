import React, { Component } from 'react';

import mergeStyles from '../lib/mergeStyles';

export default class AddSong extends Component {
  handleClick(event) {
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
      }
    ]});
    this.props.clearSongs();
  }


  render() {
    let songStyle= mergeStyles({
      backgroundColor: '#F6EBFA'
    });

    return (
      <button
        className="btn btn-primary col-xs-10 col-xs-offset-1 col-sm-2"
        onClick={ (e) => this.handleClick(e) }>
        <span
          className="glyphicon glyphicon-plus"
          aria-hidden="true"></span> Blank Song
      </button>
    );
  }

}
