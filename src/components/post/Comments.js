import React from 'react';

export default ({ comments }) => {
  if (comments.length > 0) {
    return (
      <div>
        <h3>Comments:</h3>
        <ul>
          {comments.map(comment => <li key={comment._id}>{comment.body}</li>)}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Comments:</h3>
        <p>no comments</p>
      </div>
    );
  }
};
