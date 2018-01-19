const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'AUTH:CLICKED_SIGN_IN':
      return {
        loading: action.loading,
        error: action.error,
      };
    case 'AUTH:SUCCESSFUL_SIGN_IN':
      return {
        loading: action.loading,
        error: action.error,
        token: action.token,
      };
    case 'AUTH:FAILED_SIGN_IN':
      return {
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
