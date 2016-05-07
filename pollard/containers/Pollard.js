import React, { Component } from 'react';
import { Link } from 'react-router';

import SetPage from '../components/SetPage';


export default class Pollard extends Component {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className="container">

        <ul>
          <li>
            <Link
              id="MyPlaylist"
              to="/setlist/"
              activeClassName="active">
                My Playlist
            </Link>
          </li>
        </ul>

        { children }

      </div>
    );
  }
}
