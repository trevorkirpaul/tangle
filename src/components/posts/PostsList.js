import React from 'react';
import Progress from 'material-ui/CircularProgress';

export default ({ posts, loading, error }) => {
  if (posts) {
    return (
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            {post.title} by {post.author.email}
          </li>
        ))}
      </ul>
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
