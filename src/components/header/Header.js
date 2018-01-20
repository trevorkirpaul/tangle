import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// set up custom NavLink to use active classname
const activeClassName = 'nav-item-active';

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  color: #383838;
  text-decoration: none;
  &.${activeClassName} {
    color: coral;
  }
`;

const Nav = styled.nav``;
const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 15px;
  padding: 0;
`;
const NavItem = styled.li``;
const NavText = styled.span`
  margin: 5px;
  font-family: 'Roboto', sans-serif;
`;

export default () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledNavLink exact to="/" activeClassName={activeClassName}>
            <NavText>Home</NavText>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink exact to="/signup" activeClassName={activeClassName}>
            <NavText>Sign Up</NavText>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink exact to="/signin" activeClassName={activeClassName}>
            <NavText>Sign In</NavText>
          </StyledNavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};
