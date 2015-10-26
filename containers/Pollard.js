import React, { Component } from 'react';
import SetPage from '../components/SetPage';


export default class Pollard extends Component {
  render() {
    return (
      <div className="container">
				{ this.props.children }
      </div>
    );
  }
}
