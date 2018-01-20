import React from 'react';

export default ({ onSubmit }) => {
  const handleOnSubmit = e => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="firstName" placeholder="firstName" />
      <input type="text" name="lastName" placeholder="lastName" />
      <input type="text" name="favColor" placeholder="favorite color" />
      <input type="text" name="favAnimal" placeholder="favorite animal" />
      <button type="submit">Sign Up</button>
    </form>
  );
};
