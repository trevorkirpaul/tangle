import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px;
  margin: 10px;
  border-bottom: 1px solid coral;
`;

const Title = styled.h1`
  color: #383838;
  font-size: 3em;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
`;

const SubTitle = styled.h2`
  color: #383838;
  font-size: 2em;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;

export default ({ title, subTitle }) => (
  <Wrapper>
    <Title>{title}</Title>
    {subTitle && <SubTitle>{subTitle}</SubTitle>}
  </Wrapper>
);
