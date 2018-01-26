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

export const PostItem = ({ title, author, _id }) => {
  const { email } = author;
  return (
    <Wrapper>
      <p>
        <LINK to={`/post/${_id}`}>{title}</LINK> by {email}
      </p>
    </Wrapper>
  );
};

export default PostItem;
