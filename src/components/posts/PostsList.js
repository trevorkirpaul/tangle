import React from 'react';
import Progress from 'material-ui/CircularProgress';
import PostItem from './PostItem';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px;
`;

export default ({ posts, loading, error }) => {
  if (posts) {
    return (
      <List>{posts.map(post => <PostItem key={post._id} {...post} />)}</List>
    );
  } else if (loading) {
    return (
      <div>
        <Progress />
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h2>Error!</h2>
      </div>
    );
  } else {
    return <h2>empty</h2>;
  }
};
