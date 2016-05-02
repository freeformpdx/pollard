import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Route, Link } from 'react-router';
import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter
} from 'redux-router';
import { createHistory } from 'history';

import { state } from '../reducers/reducer.js';

import Pollard from './Pollard';
import SetPage from '../components/SetPage';
import AdvancedSearch from '../components/AdvancedSearch';

import autoSelect from '../middleware/autoSelect.js';
import pushToServer from '../middleware/pushToServer.js';

// TODO
// remove combine reducers call
// const store = createStore(state);

const reducer = combineReducers({
	router: routerStateReducer,
	state: state
});

const store = compose(
	applyMiddleware(autoSelect,pushToServer),
	reduxReactRouter({createHistory}),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
				<ReduxRouter>
					<Route path="/" component={ Pollard }>
						<Route path="setlist" component={ SetPage } />
						<Route path="setlist/:id" component={ SetPage } />
						<Route path="advancedSearch" component={ AdvancedSearch } />
					</Route>
				</ReduxRouter>
      </Provider>
	);
  }
}
