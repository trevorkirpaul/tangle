import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/user_posts';
import TitlePanel from '../reusable/TitlePanel';
import CreatePostForm from './CreatePostForm';
import LoadingModal from '../signIn/SignInLoading';
// todo: change SignInLoading name to reusable component

export class CreatePostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      title: '',
      statusMessage: '',
      loading: false,
      failed: false,
      open: false,
      token: '',
    };
  }
  // methods to track textfield
  handleOnChange = e => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  };
  handleTitleOnChange = e => {
    const title = e.target.value;
    this.setState(() => ({
      title,
    }));
  };
  handleSubmit = () => {
    const { token, body, title } = this.state;
    const post = { post: body, title };
    this.props.createPost(token, post);
  };
  // methods for modal
  handleOpen = () => {
    this.setState(() => ({
      open: true,
      loading: true,
      statusMessage: 'Sending Post!',
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
  componentDidMount() {
    const token = this.props.auth.token;
    this.setState(() => ({ token }));
  }
  componentWillReceiveProps(nextProps) {
    // set token to local state
    const token = nextProps.auth.token;
    this.setState(() => ({ token }));

    // logic for modal
    const loading = nextProps.posts.loading;
    const error = nextProps.posts.error;
    const createdPost = nextProps.posts.createdPost;

    if (loading) {
      this.handleOpen();
    }
    if (error) {
      this.setState(() => ({
        loading: false,
        failed: true,
        statusMessage: 'Failed to send post',
      }));
    }
    if (createdPost) {
      this.setState(() => ({
        loading: false,
        failed: false,
        disabled: false,
        statusMessage: 'Successfully created new post!',
      }));
    }
  }
  render() {
    return (
      <div>
        <TitlePanel
          title="Create A Tangle"
          subTitle="complete this form to create a post"
        />

        <CreatePostForm
          value={this.state.post}
          onChange={this.handleOnChange}
          titleOnChange={this.handleTitleOnChange}
          handleSubmit={this.handleSubmit}
        />
        <LoadingModal
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
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  createPost: (token, post) => dispatch(createPost(token, post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  CreatePostContainer
);
