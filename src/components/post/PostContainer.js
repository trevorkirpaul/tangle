import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOnePost } from '../../actions/posts';
import Post from './Post';

export class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
      loading: false,
      error: false,
    };
  }
  componentDidMount() {
    const postID = this.props.match.params.id;
    this.props.fetchOnePost(postID);
  }
  componentWillReceiveProps(nextProps) {
    const post = nextProps.posts.post;
    const loading = nextProps.posts.loading;
    const error = nextProps.posts.error;

    this.setState(() => ({
      post,
      loading,
      error,
    }));
  }
  render() {
    return (
      <div>
        <h1>post container</h1>
        <Post
          post={this.state.post}
          error={this.state.error}
          loading={this.state.loading}
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
