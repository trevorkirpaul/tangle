import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comments';
import AddComment from './AddComment';

export class AddCommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      loading: false,
    };
  }
  handleCreateComment = () => {
    const token = localStorage.getItem('token');
    const postID = this.props.postID;
    const comment = this.state.body;
    // function to temporarily add comment to post
    // in local state of PostContainer
    this.props.handleLocalAdd({ body: comment });
    // function to send comment to server
    this.props.createComment(token, postID, comment);
    // reset comment field
    this.setState({ body: '' });
  };
  handleOnChange = e => {
    const body = e.target.value;
    this.setState(() => ({
      body,
    }));
  };

  componentWillReceiveProps(nextProps) {
    const loading = nextProps.comment.loading;
    this.setState(() => ({
      loading,
    }));
  }
  render() {
    return (
      <div>
        <AddComment
          disabled={!this.state.body}
          body={this.state.body}
          onChange={this.handleOnChange}
          onSubmit={this.handleCreateComment}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comment: state.comments,
});

const mapDispatchToProps = dispatch => ({
  createComment: (token, postID, comment) =>
    dispatch(createComment(token, postID, comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AddCommentContainer
);
