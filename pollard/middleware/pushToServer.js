import config from '../../env.js';
import * as actionTypes from '../constants/ActionTypes';

// Middleware that pushes state back to server anytime songs get fuxxed wif

let pushToServer = store => next => action => {
  const result = next(action);
  const socket = require('socket.io-client')(config.SOCKET_URL);
  
  if (action.type != actionTypes.LOAD_SETLIST_STATE) {
    // Don't push state if ya just loaded it
    socket.emit('pushState', store.getState().state.toJSON());
  }

  return result;
};

export default pushToServer;
