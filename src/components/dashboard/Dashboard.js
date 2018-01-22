import React from 'react';
import Progress from 'material-ui/CircularProgress';
import Divider from 'material-ui/Divider';
export default ({ userInfo, loading, error }) => {
  if (loading) {
    return (
      <div>
        <Progress />
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>error</h1>
      </div>
    );
  } else if (userInfo) {
    const {
      email,
      lastName,
      firstName,
      posts,
      comments,
      favoriteColor,
      favoriteAnimal,
    } = userInfo;

    return (
      <div>
        <h3>{email}</h3>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Favorite Color: {favoriteColor}</p>
        <p>Favorite Animal: {favoriteAnimal}</p>
        <Divider />
        <h3>Posts</h3>
        {posts.length > 0 ? (
          posts.map(post => <li key={post._id}>{post.title}</li>)
        ) : (
          <li>none</li>
        )}
        <h3>Comments</h3>
        {comments.length > 0 ? (
          comments.map(comment => <li key={comment._id}>{comment.body}</li>)
        ) : (
          <li>none</li>
        )}
      </div>
    );
  } else {
    return <h3>error</h3>;
  }
};
