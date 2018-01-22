import React from 'react';
import Progress from 'material-ui/CircularProgress';
import { Link } from 'react-router-dom';
export default ({ posts, loading, error }) => {
  if (posts) {
    return (
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link to={`/post/${post._id}`}>{post.title}</Link> by{' '}
            {post.author.email}
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
