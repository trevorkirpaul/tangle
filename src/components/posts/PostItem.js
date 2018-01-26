import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.li`
  background: #e8e8e8;
  padding: 15px;
  margin: 5px;
`;

const LINK = styled(Link)`
  text-decoration: none;
  color: #383838;
  border-bottom: 1px solid coral;
`;

const Detail = styled.p`
  font-size: 0.8em;
`;

export const PostItem = ({ title, author, _id, likes, dislikes, comments }) => {
  const { email } = author;
  const commentCount = comments.length;
  const likeCount = likes.length;
  return (
    <Wrapper>
      <p>
        ({likeCount}) <LINK to={`/post/${_id}`}>{title}</LINK> by {email}
      </p>
      <Detail>
        {commentCount} {commentCount === 1 ? 'comment' : 'comments'}
      </Detail>
    </Wrapper>
  );
};

export default PostItem;
