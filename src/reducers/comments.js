const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'COMMENT:LOADING':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'COMMENT:SUCCESSFULLY_ADDED':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        comment: action.comment,
      };
    case 'COMMENT:SUCCESSFUL_DELETE':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        deleted: action.deleted,
      };
    case 'COMMENT:ERROR':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
