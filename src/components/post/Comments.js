import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comments';
import RaisedButton from 'material-ui/RaisedButton';

export const Comments = ({
  comments,
  auth,
  deleteComment,
  handleLocalDelete,
}) => {
  const { token } = auth;
  const handleDelete = commentID => {
    // dispatch request to delete comment on server
    deleteComment(token, commentID);
    // remove comment from local state
    // in PostContainer.js
    handleLocalDelete(commentID);
  };
  if (comments.length > 0) {
    return (
      <div>
        <h3>Comments:</h3>
        <ul>
          {comments.map(comment => (
            <li key={comment._id}>
              {comment.body}
              <RaisedButton
                label="Remove"
                onClick={() => handleDelete(comment._id)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Comments:</h3>
        <p>no comments</p>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  deleteComment: (token, commentID) =>
    dispatch(deleteComment(token, commentID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
