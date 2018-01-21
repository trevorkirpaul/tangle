import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions/auth';

export const SignOut = ({ signOut }) => {
  return (
    <div>
      <p>from sign out</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

const mapDispatchToActions = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(null, mapDispatchToActions)(SignOut);
