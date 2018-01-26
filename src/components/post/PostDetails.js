import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px;
  margin: 10px;
`;

const Title = styled.h1`
  color: #383838;
  font-family: 'Roboto', sans-serif;
  display: inline-block;
  border-bottom: 2px solid coral;
`;

const Author = styled.h3`
  color: #383838;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;

const Body = styled.p`
  color: #383838;
  font-family: 'Roboto', sans-serif;
  padding-left: 10px;
  border-left: 2px solid coral;
`;

export default ({ title, author, body }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Author>by: {author.email}</Author>
      <Body>{body}</Body>
    </Wrapper>
  );
};
