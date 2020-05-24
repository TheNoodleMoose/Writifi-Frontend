import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../assets/svgs/Logo.svg";

const Navbar = () => {
  return (
    <NavContainer>
      <TitleLink to="/">
        <TitleContainer>
          <LogoSvg />
          <TitleText>ritifi</TitleText>
        </TitleContainer>
      </TitleLink>
      <Link to="/login">
        <Button text="Login" />
      </Link>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
`;

const TitleText = styled.p`
  font-size: 25px;
  color: #2c3e50;
  font-weight: bold;
  margin: 0;
  margin-left: -10px;
  text-decoration: none;
`;
