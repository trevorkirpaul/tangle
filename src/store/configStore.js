import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import auth from '../reducers/auth';
import posts from '../reducers/posts';
import dashboard from '../reducers/dashboard';
import comments from '../reducers/comments';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
export default () => {
  const store = createStore(
    combineReducers({
      auth,
      posts,
      dashboard,
      comments,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
