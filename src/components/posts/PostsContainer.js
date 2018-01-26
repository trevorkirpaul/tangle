import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';
import TitlePanel from '../reusable/TitlePanel';
import PostsList from './PostsList';

export class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false,
      error: false,
    };
  }
  componentDidMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    const posts = nextProps.posts.posts;
    const loading = nextProps.posts.loading;
    const error = nextProps.posts.error;

    this.setState(() => ({
      posts,
      loading,
      error,
    }));
  }
  render() {
    return (
      <div>
        <TitlePanel
          title="View Posts"
          subTitle="A complete list of all posts"
        />
        <PostsList
          loading={this.state.loading}
          posts={this.state.posts}
          error={this.state.error}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
