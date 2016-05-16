import React, { Component } from 'react';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';


export default class SongInput extends Component {
  handleChange(event) {
    this.props.updateSong({
      idx: this.props.songIdx,
      key: this.props.label,
      val: event.target.value
    });
  }

  render() {
    let gridStyle = mergeStyles({
      marginTop: 5
    });

    let labelId = "label-" + this.props.label;

    return (
      <div
        style={ gridStyle }>
        <div className="input-group">
          <span
            className="input-group-addon"
            id={ labelId }>{ this.props.label }</span>
            <input
              type="text"
              tabIndex='2'
              className={ "form-control " +  labelId }
              aria-describedby={ labelId }
              value={ this.props.val }
              onChange={ (e) => this.handleChange(e) }
              />
        </div>
      </div>
    );
  }
}
