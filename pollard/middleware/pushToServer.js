import config from '../../env.js';
import * as actionTypes from '../constants/ActionTypes';

// Middleware that pushes state back to server anytime songs get fuxxed wif
const shouldPushStateActionTypes = [
  actionTypes.ADD_SONG,
  actionTypes.DELETE_SONG,
  actionTypes.MARK_SONG_PLAYED,
  actionTypes.MOVE_SONG,
  actionTypes.UPDATE_SONG,
];

function shouldPushState(action) {
  return shouldPushStateActionTypes.indexOf(action.type) >= 0;
}

let pushToServer = store => next => action => {
  const result = next(action);
  const socket = require('socket.io-client')(config.SOCKET_URL);


  if (shouldPushState(action)) {
    console.log(store.getState().state.toJSON());
    socket.emit('pushState', store.getState().state.toJSON());
  }

  return result;
};

export default pushToServer;
