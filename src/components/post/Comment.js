import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

const Wrapper = styled.li``;
const Body = styled.p``;

export default ({ _id, body, handleDelete }) => {
  return (
    <Wrapper>
      <Body>{body}</Body>
      <FlatButton label="Remove" onClick={() => handleDelete(_id)} />
    </Wrapper>
  );
};
