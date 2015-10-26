import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { state } from '../reducers/reducer.js';

import Pollard from './Pollard';
import autoSelect from '../middleware/autoSelect.js';
import pushToServer from '../middleware/pushToServer.js';

// TODO
// remove combine reducers call
// const store = createStore(state);

const createStoreWithMiddleware = applyMiddleware(
	autoSelect,
	pushToServer
)(createStore);

const reducer = combineReducers({state});
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Pollard /> }
      </Provider>
    );
  }
}
