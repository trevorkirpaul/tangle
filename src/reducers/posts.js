const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'POSTS:CLICKED_LIKE_POST':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'POSTS:CLICKED_REMOVE_LIKE':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'POSTS:CLICKED_CREATE_POST':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'POSTS:SUCCESFULLY_ADDED_LIKE':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        postLiked: action.postLiked,
      };
    case 'POSTS:SUCCESFULLY_REMOVED_LIKE':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        removedLike: action.removedLike,
      };
    case 'POSTS:SUCCESSFULLY_CREATED_POST':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        createdPost: action.createdPost,
      };
    case 'POSTS:FAILED_ADDING_LIKE':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'POSTS:FAILED_REMOVING_LIKE':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'POSTS:FAILED_TO_CREATE_POST':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'POSTS:RESET_LIKE_CHECK':
      return {
        ...state,
        removedLike: action.removedLike,
        postLiked: action.postLiked,
      };
    case 'POSTS:START_FETCH':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'POSTS:RECIEVE_COMPLETE':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        posts: action.posts,
      };
    case 'POSTS:RECIEVE_ONE':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        post: action.post,
      };

    case 'POSTS:RECIEVE_FAIL':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'POSTS:CLEAR_SINGLE_POST':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        post: action.post,
      };
    default:
      return state;
  }
};
