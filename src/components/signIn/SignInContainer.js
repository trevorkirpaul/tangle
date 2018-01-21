import React, { Component } from 'react';
import SignInForm from './SignInForm';
import { connect } from 'react-redux';
import { signIn } from '../../actions/auth';

export class SignInContainer extends Component {
  render() {
    return (
      <div>
        <SignInForm />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: fields => dispatch(signIn(fields)),
});

export default connect(null, mapDispatchToProps)(SignInContainer);
