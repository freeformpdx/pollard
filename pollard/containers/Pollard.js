import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';


class Pollard extends Component {
  render() {
    const {
      children,
      viewSetlist,
    } = this.props;

    let setlistPath = '/setlist/';
    let setlistLinkText = 'New Playlist';
    if (viewSetlist.get('id')) {
      setlistPath = setlistPath + viewSetlist.get('id');
      setlistLinkText = 'My Playlist';
    }
    return (
      <div className="container">

        <ul>
          <li>
            <Link
              id="Home"
              to="/"
              activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link
              id="MyPlaylist"
              to={ setlistPath }
              activeClassName="active">
              { setlistLinkText }
            </Link>
          </li>
          <li>
            <a
              href="http://freeformportland.org/testing"
              rel="noopener noreferrer"
              target="_blank">
              Report a bug
            </a>
          </li>
        </ul>

        { children }

      </div>
    );
  }
}

function mapStateToProps({state}) {
  return {
    viewSetlist: state.getIn(['view','setlist']),
  };
}

// Wrap the component to inject state into it
export default connect(mapStateToProps)(Pollard);
