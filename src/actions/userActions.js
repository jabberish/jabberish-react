import { fetchLogin, fetchVerify } from '../services/auth-api';

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

export const VERIFY_USER_LOADING = 'VERIFY_USER_LOADING';
export const VERIFY_USER = 'VERIFY_USER';
export const VERIFY_USER_ERROR = 'VERIFY_USER_ERROR';
export const verifyUser = () => dispatch => {
  dispatch({
    type: VERIFY_USER_LOADING
  });

  return fetchVerify()
    .then(user => {
      dispatch({
        type: VERIFY_USER,
        payload: user
      });
    })
    .catch(err => {
      dispatch({
        type: VERIFY_USER_ERROR,
        payload: err
      });
    });
};
