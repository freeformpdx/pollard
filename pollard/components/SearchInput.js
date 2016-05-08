import React, { Component } from 'react';

export default class SearchInput extends Component {
  render() {
    const {
      type,
      value,
      onKeyPress,
      onChange,
    } = this.props;

    const id = type + 'SearchInput';

    return (
      <div className="col-xs-12 col-sm-3">
        <input
          className="form-control"
          id={ id }
          type="text"
          placeholder={ type }
          value={ value }
          onKeyPress={ (e) => onKeyPress(e) }
          onChange={ (e) => onChange(e) }/>
      </div>
    );
  }

}
