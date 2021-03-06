import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../header/HeaderContainer';
import Welcome from '../welcome/Welcome';
import Dashboard from '../dashboard/DashboardContainer';
import SignUp from '../signUp/SignUpContainer';
import SignIn from '../signIn/SignInContainer';
import SignOut from '../signOut/SignOut';
import CreatePost from '../createPost/CreatePostContainer';
import Posts from '../posts/PostsContainer';
import Post from '../post/PostContainer';
export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signout" component={SignOut} />
          <Route exact path="/createpost" component={CreatePost} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/post/:id" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
