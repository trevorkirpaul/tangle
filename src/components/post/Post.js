import React from 'react';
import Progress from 'material-ui/CircularProgress';

export default ({ post, loading, error }) => {
  if (loading) {
    return (
      <div>
        <Progress />
      </div>
    );
  } else if (post) {
    return (
      <div>
        <h1>{post.title}</h1>
        <h3>by {post.author.email}</h3>
        <p>{post.body}</p>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>ERROR!</h1>
      </div>
    );
  } else {
    return <h1>error</h1>;
  }
};
