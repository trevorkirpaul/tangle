const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'DASHBOARD:LOADING':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'DASHBOARD:RECIEVE_USERINFO':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        userInfo: action.userInfo,
      };
    case 'DASHBOARD:ERROR':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
