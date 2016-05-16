import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';

export default class Pollard extends Component {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div>
        <NavBar />
        <div
          style={{paddingTop: 70}}
          className="container">
          { children }
        </div>
      </div>
    );
  }
}
