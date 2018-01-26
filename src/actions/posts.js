import axios from 'axios';
import { POST, POST_FETCH_ONE } from '../config';

export const fetchPosts = () => {
  return dispatch => {
    dispatch({
      type: 'POSTS:START_FETCH',
      loading: true,
      error: false,
    });
    axios
      .get(POST)
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

export const fetchOnePost = postID => {
  return dispatch => {
    dispatch({
      type: 'POSTS:START_FETCH',
      loading: true,
      error: false,
    });
    axios
      .post(POST_FETCH_ONE, { postID })
      .then(({ data }) => {
        return dispatch({
          type: 'POSTS:RECIEVE_ONE',
          loading: false,
          error: false,
          post: data.post,
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

// was considering this for
// PostContainer.js' componentWillUnmount()
// to prevent showing old post when new post is loading
// but since PostContainer.js immediately
// dispatches 'loading:true'
// Post.js will also immediately render the progress indicator
// since the component is so 'defensively'coded
export const clearSinglePost = () => ({
  type: 'POSTS:CLEAR_SINGLE_POST',
  error: false,
  loading: false,
  post: null,
});
