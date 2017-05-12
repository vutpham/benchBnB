import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash/merge';

const defaultState = {
    currentUser: null,
    errors: []
}

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state)
  let newState
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state)
      newState.session.currentUser = state.session.currentUser;
      newState.session.errors = [];
      return newState;

    case RECEIVE_ERRORS:
      newState = merge({}, state)
      newState.session.errors = state.session.errors;
      newState.session.currentUser = null;
      return newState;

    default:
      return state;
  }
}

export default sessionReducer;