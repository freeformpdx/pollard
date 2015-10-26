import config from '../pollard.config';
import * as actionTypes from '../constants/ActionTypes';

// Middleware that pushes state back to server anytime songs get fuxxed wif

let pushToServer = store => next => action => {
  const result = next(action);
	const socket = require('socket.io-client')(config().socketUrl);

	socket.emit('pushState', store.getState().state.toJSON());

  return result;
};

export default pushToServer;
