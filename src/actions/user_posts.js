import axios from 'axios';
import { POST_CREATE } from '../config';

export const createPost = (token, post) => {
  return dispatch => {
    dispatch({
      type: 'POSTS:CLICKED_CREATE_POST',
      loading: true,
      error: false,
    });
    axios
      .post(POST_CREATE, { token, ...post })
      .then(({ data }) => {
        return dispatch({
          type: 'POSTS:SUCCESSFULLY_CREATED_POST',
          loading: false,
          error: false,
          createdPost: true,
        });
      })
      .catch(() => {
        return dispatch({
          type: 'POSTS:FAILED_TO_CREATE_POST',
          loading: false,
          error: true,
        });
      });
  };
};
