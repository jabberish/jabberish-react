import { fetchLogin } from '../services/auth-api';

export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const loginUser = (user) => dispatch => {
  dispatch({
    type: LOGIN_USER_LOADING
  });

  return fetchLogin(user)
    .then(user => {
      dispatch({
        type: LOGIN_USER,
        payload: user
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: err
      });
    });
};
