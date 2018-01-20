import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import Welcome from '../welcome/Welcome';
import SignUp from '../signUp/SignUpContainer';
import SignIn from '../signIn/SignInContainer';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
