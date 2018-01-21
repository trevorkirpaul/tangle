import React, { Component } from 'react';
import { connect } from 'react-redux';
import { autoSignIn } from '../../actions/auth';
import Header from './Header';

export class HeaderContainer extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.autoSignIn(token);
    }
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = dispatch => ({
  autoSignIn: token => dispatch(autoSignIn(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
