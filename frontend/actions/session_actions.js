import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(() => dispatch(receiveCurrentUser(user)),
  error => dispatch(receiveErrors(error.responseJSON)))
};

export const logout = () => dispatch => (
  APIUtil.logout().then(res => dispatch(receiveCurrentUser(null)),
  error => dispatch(receiveErrors(error.responseJSON)))
);

export const signup = (user) => dispatch => (
  APIUtil.signup(user).then(res => dispatch(receiveCurrentUser(res)),
  error => dispatch(receiveErrors(error.responseJSON)))
);

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});
