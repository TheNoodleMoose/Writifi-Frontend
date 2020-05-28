import React from "react";
import styled from "styled-components";
import LoginCard from "../../components/LoginCard";
import { ReactComponent as ComputerWork } from "../../assets/svgs/computerWork.svg";

const Login = () => {
  return (
    <LoginContainer>
      <WelcomeContainer>
        <WelcomeTitle>Welcome back!</WelcomeTitle>
        <WelcomeDescription>
          Get logged in and start discovering...
        </WelcomeDescription>
        <ComputerWorkSvg width={800} height={600} />
      </WelcomeContainer>
      <LoginCard />
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  background-color: aquamarine;
  justify-content: space-around;
  align-items: center;
  height: 95%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const ComputerWorkSvg = styled(ComputerWork)`
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const WelcomeTitle = styled.h3`
  font-size: 4em;
  font-weight: bold;
  color: #2c3e50;
`;

const WelcomeDescription = styled.p`
  font-size: 2em;
  color: #2c3e50;
  font-weight: 500;
`;
