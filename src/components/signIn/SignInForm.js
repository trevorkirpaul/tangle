import React from 'react';

export default () => {
  return (
    <form>
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />

      <button type="submit">Sign In</button>
    </form>
  );
};
