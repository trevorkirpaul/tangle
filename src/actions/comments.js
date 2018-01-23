import axios from 'axios';
import { COMMENT } from '../config';

export const createComment = (token, postID, comment) => {
  return dispatch => {
    dispatch({
      type: 'COMMENT:LOADING',
      loading: true,
      error: false,
    });
    axios
      .post(COMMENT, { token, postID, comment })
      .then(({ data }) => {
        dispatch({
          type: 'COMMENT:SUCCESSFULLY_ADDED',
          loading: false,
          error: false,
          comment: data.comment,
        });
      })
      .catch(() => {
        return dispatch({
          type: 'COMMENT:ERROR',
          loading: false,
          error: true,
        });
      });
  };
};
