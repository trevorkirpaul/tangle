import axios from 'axios';
import { USER_FETCH_POP } from '../config';

export const fetchUserInfo = token => {
  return dispatch => {
    dispatch({
      type: 'DASHBOARD:LOADING',
      loading: true,
      error: false,
    });
    axios
      .post(USER_FETCH_POP, { token })
      .then(({ data }) => {
        return dispatch({
          type: 'DASHBOARD:RECIEVE_USERINFO',
          loading: false,
          error: false,
          userInfo: data.user,
        });
      })
      .catch(() => {
        return dispatch({
          type: 'DASHBOARD:ERROR',
          error: true,
          loading: false,
        });
      });
  };
};
