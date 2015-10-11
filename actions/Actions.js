import * as types from '../constants/ActionTypes';

export function action(payload) {
  return {
    type: types.POLLARD_ACTION,
    payload
  }
}
