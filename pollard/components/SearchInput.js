import React, { Component } from 'react';

export default class SearchInput extends Component {
  render() {
    const {
      placeholderText,
      value,
      onKeyPress,
      onChange,
    } = this.props;

    return (
      <div className="col-xs-12 col-sm-3">
        <input
          className="form-control"
          type="text"
          placeholder={ placeholderText }
          value={ value }
          onKeyPress={ (e) => onKeyPress(e) }
          onChange={ (e) => onChange(e) }/>
      </div>
    );
  }

}
