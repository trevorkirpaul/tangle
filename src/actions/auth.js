import axios from 'axios';
import { USER, USER_SIGNIN, USER_TOKEN } from '../config';

// auto sign in using JWT
export const autoSignIn = token => {
  // const JWTpackage = {
  //   headers: {
  //     authorization: token,
  //   },
  // };
  return dispatch => {
    dispatch({
      type: 'AUTH:SENT_TOKEN',
      loading: true,
      error: false,
    });
    axios
      .post(USER_TOKEN, { token })
      .then(({ data }) =>
        dispatch({
          type: 'AUTH:TOKEN_SUCCESSFUL_SIGN_IN',
          loading: false,
          error: false,
          userInfo: data.userInfo,
          token: data.token,
        })
      )
      .catch(() =>
        dispatch({
          type: 'AUTH:FAILED_TOKEN_SIGN_IN',
          error: true,
          loading: false,
        })
      );
  };
};

export const signIn = fields => {
  return dispatch => {
    dispatch({
      type: 'AUTH:CLICKED_SIGN_IN',
      loading: true,
      error: false,
    });
    axios
      .post(USER_SIGNIN, { ...fields })
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        dispatch({
          type: 'AUTH:SUCCESSFUL_SIGN_IN',
          loading: false,
          error: false,
          token: data.token,
          userInfo: data.userInfo,
        });
      })
      .catch(() =>
        dispatch({
          type: 'AUTH:FAILED_SIGN_IN',
          error: true,
          loading: false,
        })
      );
  };
};

export const signUp = fields => {
  return dispatch => {
    dispatch({
      type: 'AUTH: CLICKED_SIGN_UP',
      error: false,
      loading: true,
    });
    axios
      .post(USER, { ...fields })
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        return dispatch({
          type: 'AUTH:SUCCESSFUL_SIGN_UP',
          loading: false,
          error: false,
          token: data.token,
          userInfo: data.userInfo,
        });
      })
      .catch(() =>
        dispatch({
          type: 'AUTH:FAILED_SIGN_UP',
          loading: false,
          error: true,
        })
      );
  };
};

export const signOut = () => {
  return dispatch => {
    dispatch({
      type: 'AUTH:CLICKED_SIGN_OUT',
      loading: false,
      error: false,
      token: null,
      userInfo: null,
    });
    localStorage.removeItem('token');
  };
};
