import * as types from '../constants/ActionTypes';

export function action(payload) {
  return {
    type: types.ACTION,
    payload
  }
}
