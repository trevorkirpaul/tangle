import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comments';
import styled from 'styled-components';
import Comment from './Comment';

const Wrapper = styled.div`
  margin: 10px;
  padding: 15px;
  background: #e8e8e8;
`;
const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  display: inline-block;
  border-bottom: 2px solid coral;
`;
const List = styled.ul`
  list-style: none;
  margin: 10px;
  padding: 15px;
`;

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
      <Wrapper>
        <Title>Comments</Title>
        <List>
          {comments.map(comment => (
            <Comment
              key={comment._id}
              {...comment}
              handleDelete={handleDelete}
            />
          ))}
        </List>
      </Wrapper>
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
