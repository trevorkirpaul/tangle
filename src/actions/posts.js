import axios from 'axios';
import { POST, POST_FETCH_ONE, POST_LIKE, POST_REMOVE_LIKE } from '../config';

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

export const likePost = (token, postID) => {
  return dispatch => {
    dispatch({
      type: 'POSTS:CLICKED_LIKED_POST',
      error: false,
      loading: true,
    });
    axios
      .put(POST_LIKE, { token, postID })
      .then(({ data }) => {
        return dispatch({
          type: 'POSTS:SUCCESFULLY_ADDED_LIKE',
          loading: false,
          error: false,
          postLiked: !!data.post,
        });
      })
      .catch(() => {
        return dispatch({
          type: 'POSTS:FAILED_ADDING_LIKE',
          error: true,
          loading: false,
        });
      });
  };
};

export const removeLike = (token, postID) => {
  return dispatch => {
    dispatch({
      type: 'POSTS:CLICKED_REMOVE_LIKE',
      loading: true,
      error: false,
    });
    axios
      .put(POST_REMOVE_LIKE, { token, postID })
      .then(({ data }) => {
        return dispatch({
          type: 'POSTS:SUCCESFULLY_REMOVED_LIKE',
          loading: false,
          error: false,
          removedLike: !!data.post,
        });
      })
      .catch(() => {
        return dispatch({
          type: 'POSTS:FAILED_REMOVING_LIKE',
          loading: false,
          error: true,
        });
      });
  };
};
// dispatched after message alerting user
// of their like/dislike has closed
// this prevents the message from showing again
// if the page is revisited
export const resetLikeCheck = () => ({
  type: 'POSTS:RESET_LIKE_CHECK',
  removedLike: false,
  postLiked: false,
});

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
