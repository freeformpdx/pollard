import React, { Component } from 'react';

export default class LoadSchedule extends Component {
  render() {
    return (
      <form action="/api/loadSchedule" method="post" encType="multipart/form-data">
        PW <input type="text" name="pw"></input><br/>
        <input type="file" name="sched" id="sched"></input><br/>
      </form>
    );
  }
}
