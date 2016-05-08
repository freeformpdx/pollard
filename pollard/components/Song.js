import React, { Component } from 'react';

import SongSingleLine from './SongSingleLine';
import SelectedSong from './SelectedSong';

export default class Song extends Component {
  render() {
    const {
      selectedSong,
      idx,
      ...rest,
    } = this.props;

    if (idx === selectedSong) {
      return (
        <SelectedSong
          idx={ idx }
          { ...rest }/>
      );
    } else {
      return (
        <SongSingleLine
          idx={ idx }
          { ...rest }/>
      );
    }
  }
}
