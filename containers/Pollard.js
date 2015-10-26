import React, { Component } from 'react';
import { Link } from 'react-router';

import SetPage from '../components/SetPage';


export default class Pollard extends Component {
  render() {
    return (
      <div className="container">
					<ul>
						<li><Link to="/setlist" activeClassName="active">Setlist</Link></li>
					</ul>
				{ this.props.children }
      </div>
    );
  }
}
