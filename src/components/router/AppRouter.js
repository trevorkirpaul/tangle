import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../header/HeaderContainer';
import Welcome from '../welcome/Welcome';
import SignUp from '../signUp/SignUpContainer';
import SignIn from '../signIn/SignInContainer';
import SignOut from '../signOut/SignOut';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signout" component={SignOut} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
