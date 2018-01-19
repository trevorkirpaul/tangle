import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import Welcome from '../welcome/Welcome';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
