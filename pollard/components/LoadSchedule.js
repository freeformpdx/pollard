import React, { Component } from 'react';

export default class LoadSchedule extends Component {
  render() {
    return (
      <form action="/api/loadSchedule" method="post">
        PW <input type="text" name="pw"></input><br/>
        <input type="file" name="sched"></input><br/>
      </form>
    );
  }
}
