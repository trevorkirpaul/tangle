import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppRouter from './components/router/AppRouter';
const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <AppRouter />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
