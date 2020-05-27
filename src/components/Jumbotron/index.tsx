import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { ReactComponent as LogoSvg } from "../../assets/svgs/Logo.svg";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <JumboTronContainer>
      <ContentContainer>
        <LogoSvg width="200" height="200" />
        <TitleContainer>
          <TitleText>Endless stories at the tips of your fingers.</TitleText>
          <TitleText>Create and Discover now.</TitleText>
        </TitleContainer>

        <ButtonContainer>
          <Link to="/signup">
            <Button text="Start Discovering" />
          </Link>
          <Button text="Why Writifi?" />
        </ButtonContainer>
      </ContentContainer>
    </JumboTronContainer>
  );
};

export default Jumbotron;

const JumboTronContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  background-color: aquamarine;
  padding: 20px 0;
  min-width: 300px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const TitleText = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #2c3e50;
  margin: 15px 0;
`;

const TitleContainer = styled.div``;
