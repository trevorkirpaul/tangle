import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

// button syles -- mat-ui
const btnStyle = {
  color: 'coral',
};

const Wrapper = styled.div`
  padding: 15px;
  margin: 10px;
  color: #f8f8f8;
  background: #383838;
`;
const Detail = styled.p`
  color: #f8f8f8;
  font-size: 0.8em;
`;

export default ({
  handleAddLike,
  handleRemoveLike,
  postID,
  userInfo,
  likes,
}) => {
  const liked = likes.includes(userInfo._id);
  return (
    <Wrapper>
      <Detail>Post Actions:</Detail>

      <FlatButton
        style={btnStyle}
        label={liked ? 'Remove Like' : 'Add Like'}
        onClick={
          liked ? () => handleRemoveLike(postID) : () => handleAddLike(postID)
        }
      />
    </Wrapper>
  );
};
