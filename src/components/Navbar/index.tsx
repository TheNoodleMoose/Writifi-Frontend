import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../assets/svgs/Logo.svg";

const Navbar = () => {
  return (
    <NavContainer>
      <NavLink to="/">
        <TitleContainer>
          <LogoSvg />
          <TitleText>ritifi</TitleText>
        </TitleContainer>
      </NavLink>
      <LinkContainer>
        <NavLink to="/signup">
          <NavItemText>Sign up</NavItemText>
        </NavLink>
        <Link to="/login">
          <Button text="Login" />
        </Link>
      </LinkContainer>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  padding-left: 4%;
  padding-right: 4%;
  margin-right: auto;
  margin-left: auto;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const TitleText = styled.h2`
  font-size: 25px;
  color: #2c3e50;
  font-weight: bold;
  margin: 0;
  margin-left: -10px;
  text-decoration: none;
`;

const NavItemText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #2c3e50;

  :hover {
    text-decoration: underline;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
`;
