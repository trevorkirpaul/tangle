import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../../actions/dashboard';
import Dashboard from './Dashboard';

export class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      userInfo: null,
    };
  }
  componentDidMount() {
    // if token hasn't been recieved via redux,
    // pull from localStorage
    const token = this.props.auth.token || localStorage.getItem('token');

    token && this.props.fetchUserInfo(token);
  }
  componentWillReceiveProps(nextProps) {
    const loading = nextProps.dashboard.loading;
    const error = nextProps.dashboard.error;
    const userInfo = nextProps.dashboard.userInfo;

    this.setState(() => ({
      loading,
      error,
      userInfo,
    }));
  }
  render() {
    return (
      <div>
        <h1>dashboard</h1>
        <Dashboard
          loading={this.state.loading}
          error={this.state.error}
          userInfo={this.state.userInfo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  dashboard: state.dashboard,
});

const mapDispatchToProps = dispatch => ({
  fetchUserInfo: token => dispatch(fetchUserInfo(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
