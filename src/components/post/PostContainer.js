import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchOnePost,
  likePost,
  removeLike,
  resetLikeCheck,
} from '../../actions/posts';
import Post from './Post';
import uuid from 'uuid';
import SnackBar from '../reusable/SnackBar';

export class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      comments: [],
      loading: false,
      error: false,
      snackbarOpen: false,
      snackMessage: '',
    };
  }
  handleAddLike = postID => {
    const token = this.props.token;
    this.props.likePost(token, postID);
  };
  handleRemoveLike = postID => {
    const token = this.props.token;
    this.props.removeLike(token, postID);
  };
  handleLocalAddComment = commentInfo => {
    const currentComments = this.state.comments;
    const comment = {
      ...commentInfo,
      _id: uuid(),
    };
    this.setState(prevState => ({
      comments: [...currentComments, comment],
    }));
  };
  handleLocalDeleteComment = commentID => {
    const comments = this.state.comments.filter(
      comment => comment._id !== commentID
    );
    this.setState(() => ({
      comments,
    }));
  };
  // snackbar
  handleSnackbarClose = () => {
    this.setState({ snackbarOpen: false });
    this.props.resetLikeCheck();
  };
  componentDidMount() {
    const postID = this.props.match.params.id;
    this.props.fetchOnePost(postID);
  }
  componentWillReceiveProps(nextProps) {
    const post = nextProps.posts.post;
    let comments;
    post && (comments = post.comments);
    const loading = nextProps.posts.loading;
    const error = nextProps.posts.error;
    // snackbar
    const postLiked = nextProps.posts.postLiked;
    const removedLike = nextProps.posts.removedLike;

    // if user has preformed an action on post
    postLiked &&
      this.setState(() => ({ snackMessage: 'Liked Post', snackbarOpen: true }));
    removedLike &&
      this.setState(() => ({
        snackMessage: 'Removed Like',
        snackbarOpen: true,
      }));

    this.setState(() => ({
      post,
      loading,
      error,
      comments,
    }));
  }
  render() {
    return (
      <div>
        <Post
          post={this.state.post}
          comments={this.state.comments}
          error={this.state.error}
          loading={this.state.loading}
          handleLocalAdd={this.handleLocalAddComment}
          handleLocalDelete={this.handleLocalDeleteComment}
          handleAddLike={this.handleAddLike}
          handleRemoveLike={this.handleRemoveLike}
          userInfo={this.props.userInfo}
        />
        <SnackBar
          message={this.state.snackMessage}
          snackbarOpen={this.state.snackbarOpen}
          handleSnackbarClose={this.handleSnackbarClose}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  token: state.auth.token,
  userInfo: state.auth.userInfo,
});

const mapDispatchToProps = dispatch => ({
  fetchOnePost: postID => dispatch(fetchOnePost(postID)),
  likePost: (token, postID) => dispatch(likePost(token, postID)),
  removeLike: (token, postID) => dispatch(removeLike(token, postID)),
  resetLikeCheck: () => dispatch(resetLikeCheck()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
