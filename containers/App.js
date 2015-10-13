import React, { Component } from 'react';
import Pollard from './Pollard';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { state } from '../reducers/reducer.js';

// TODO
// remove combine reducers call
// const store = createStore(state);

const reducer = combineReducers({state});
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Pollard /> }
      </Provider>
    );
  }
}
