const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'AUTH:SENT_TOKEN':
      return {
        loading: action.loading,
        error: action.error,
      };
    case 'AUTH:CLICKED_SIGN_IN':
      return {
        loading: action.loading,
        error: action.error,
      };
    case 'AUTH: CLICKED_SIGN_UP':
      return {
        loading: action.loading,
        error: action.error,
      };
    case 'AUTH:CLICKED_SIGN_OUT':
      return {
        loading: action.loading,
        error: action.error,
        userInfo: action.userInfo,
        token: action.token,
      };
    case 'AUTH:TOKEN_SUCCESSFUL_SIGN_IN':
      return {
        loading: action.loading,
        error: action.error,
        userInfo: action.userInfo,
        token: action.token,
      };
    case 'AUTH:SUCCESSFUL_SIGN_IN':
      return {
        loading: action.loading,
        error: action.error,
        token: action.token,
        userInfo: action.userInfo,
      };
    case 'AUTH:SUCCESSFUL_SIGN_UP':
      return {
        loading: action.error,
        error: action.error,
        token: action.token,
        userInfo: action.userInfo,
      };
    case 'AUTH:FAILED_TOKEN_SIGN_IN':
      return {
        loading: action.loading,
        error: action.loading,
      };
    case 'AUTH:FAILED_SIGN_IN':
      return {
        loading: action.loading,
        error: action.error,
      };
    case 'AUTH:FAILED_SIGN_UP':
      return {
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
