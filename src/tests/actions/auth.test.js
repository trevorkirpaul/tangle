import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/auth';
import { USER, USER_SIGNIN, USER_TOKEN } from '../../config';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  xit('creates AUTH:TOKEN_SUCCESSFUL_SIGN_IN', () => {
    fetchMock.getOnce('/signin', {
      data: { token: 'token', userInfo: 'info' },
    });

    const expectedActions = [
      {
        type: 'AUTH:CLICKED_SIGN_IN',
        loading: false,
        error: false,
      },
      {
        type: 'AUTH:SUCCESSFUL_SIGN_IN',
        token: 'token',
        userInfo: 'info',
        loading: false,
        error: false,
      },
    ];

    const store = mockStore({});

    return store.dispatch(actions.signIn('test')).then(() => {
      console.log(store.getActions());
      // expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('signUp', () => {
  xit('returns new user', () => {
    const signUp = actions.signUp({ name: 'Bill', password: 'pass' });
  });
});
