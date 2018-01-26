import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOnePost } from '../../actions/posts';
import Post from './Post';
import uuid from 'uuid';

export class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      comments: [],
      loading: false,
      error: false,
    };
  }

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
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  fetchOnePost: postID => dispatch(fetchOnePost(postID)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
