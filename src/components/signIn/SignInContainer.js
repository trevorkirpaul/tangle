import React, { Component } from 'react';
import SignInForm from './SignInForm';
import SignInLoading from './SignInLoading';
import { connect } from 'react-redux';
import { signIn } from '../../actions/auth';

export class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      statusMessage: '',
      disabled: true,
      failed: false,
      loading: false,
    };
  }
  handleOpen = () => {
    this.setState(() => ({
      open: true,
      statusMessage: 'Signing In...',
      loading: true,
    }));
  };
  handleClose = () => {
    this.setState(() => ({
      open: false,
      failed: false,
      statusMessage: '',
    }));
  };
  handleContinue = () => {
    this.props.history.push('/');
  };
  handleSignIn = fields => {
    this.props.signIn(fields);
  };
  componentWillReceiveProps(nextProps) {
    const loading = nextProps.auth.loading;
    const token = nextProps.auth.token;
    const error = nextProps.auth.error;
    if (loading) {
      this.handleOpen();
    }

    if (token) {
      this.setState(() => ({
        statusMessage: 'Successful Sign In!',
        disabled: false,
        loading: false,
      }));
    }

    if (error) {
      this.setState(() => ({
        statusMessage: 'Failed To Sign In!',
        failed: true,
        loading: false,
      }));
    }
  }
  render() {
    return (
      <div>
        <SignInForm handleSignIn={this.handleSignIn} />
        <SignInLoading
          open={this.state.open}
          loading={this.state.loading}
          disabled={this.state.disabled}
          failed={this.state.failed}
          statusMessage={this.state.statusMessage}
          handleContinue={this.handleContinue}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  signIn: fields => dispatch(signIn(fields)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
