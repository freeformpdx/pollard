import React, { Component, PropTypes } from 'react';

export default class PlaylistInfoEdit extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-5">
          <input
            className="form-control"
            type="text"
            value= { this.props.title }
            onChange={ (e) => this.props.setPlaylistTitle(e.target.value) }
            placeholder="Show Title"/>
          <br/>
          <textarea
            className="form-control"
            rows="9"
            value= { this.props.description }
            onChange={ (e) => this.props.setPlaylistDescription(e.target.value) }
            placeholder="Show Description"></textarea>
          <br/>
        </div>
        <div className="col-xs-12 col-sm-7">
          <input
            className="form-control"
            type="text"
            value= { this.props.img }
            onChange={ (e) => this.props.setPlaylistImg(e.target.value) }
            placeholder="Image Link"/>
          <br/>
          <div style={{height: 190, width: 388, textAlign: 'center' }}>
            <img style={{ maxHeight: 190, maxWidth: 388 }} src={ this.props.img }/>
          </div>
          <br/>
        </div>
        <div style={{ marginTop:10 }}>
          <div
            className="col-xs-12"
            style={{textAlign: 'right'}}>
            <a
              className="hideButton"
              onClick={ this.props.toggleOpen }
              style={{marginLeft: 15, cursor: 'default'}}>
              <small>
                <span
                  className="glyphicon glyphicon-triangle-top"
                  aria-hidden="true"></span> Hide
              </small>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
