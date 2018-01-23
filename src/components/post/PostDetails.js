import React from 'react';

export default ({ title, author, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>by {author.email}</h3>
      <p>{body}</p>
    </div>
  );
};
