import axios from 'axios';
import { POST_CREATE } from '../config';

export const fetchPosts = () => {
  return dispatch => {
    dispatch({
      type: 'POSTS:START_FETCH',
      loading: true,
      error: false,
    });
    axios
      .get(POST_CREATE)
      .then(({ data }) => {
        return dispatch({
          type: 'POSTS:RECIEVE_COMPLETE',
          loading: false,
          error: false,
          posts: data.posts,
        });
      })
      .catch(() => {
        return dispatch({
          type: 'POSTS:RECIEVE_FAIL',
          loading: false,
          error: true,
        });
      });
  };
};
