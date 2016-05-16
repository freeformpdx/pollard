import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';


class NavBar extends Component {
  render() {
    const {
      viewSetlist,
    } = this.props;

    /**
     * If we have an existing playlist for this session
     * use that id in the nav link.
     **/

    let setlistPath = '/setlist/';
    let setlistLinkText = 'New Playlist';
    if (viewSetlist.get('id')) {
      setlistPath = setlistPath + viewSetlist.get('id');
      setlistLinkText = 'My Playlist';
    }

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link
              id="Home"
              to="/"
              className="navbar-brand"
              activeClassName="active">
              Pollard
            </Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
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
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({state}) {
  return {
    viewSetlist: state.getIn(['view','setlist']),
  };
}

// Wrap the component to inject state into it
export default connect(mapStateToProps)(NavBar);
