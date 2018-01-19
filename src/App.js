import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import AppRouter from './components/router/AppRouter';
const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
