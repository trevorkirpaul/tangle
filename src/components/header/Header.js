import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 15px;
`;

const buttonStyle = {
  margin: '5px',
};

export default ({ auth }) => {
  if (auth.token) {
    return (
      <nav>
        <Link to="/">
          <FlatButton label="Tangle" style={buttonStyle} />
        </Link>
        <Link to="/createpost">
          <FlatButton label="Create Post" />
        </Link>
        <Link to="/signout">
          <FlatButton label="Sign Out" />
        </Link>
      </nav>
    );
  } else {
    return (
      <nav>
        <Wrapper>
          <Link to="/">
            <FlatButton label="Tangle" style={buttonStyle} />
          </Link>
          <Link to="/signup">
            <FlatButton label="Sign Up" style={buttonStyle} />
          </Link>
          <Link to="/signin">
            <FlatButton label="Sign In" style={buttonStyle} />
          </Link>
        </Wrapper>
      </nav>
    );
  }
};
