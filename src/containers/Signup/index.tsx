import React from "react";
import styled from "styled-components";
import SignupCard from "../../components/SignupCard";
import { ReactComponent as ComputerWork } from "../../assets/svgs/computerWork.svg";

const Signup = () => {
  return (
    <SignupContainer>
      <WelcomeContainer>
        <WelcomeTitle>Welcome to Writifi</WelcomeTitle>
        <WelcomeDescription>
          Create an account and start discovering...
        </WelcomeDescription>
        <ComputerWorkSvg width={800} height={600} />
      </WelcomeContainer>
      <SignupCard />
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled.div`
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
  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

const WelcomeDescription = styled.p`
  font-size: 2em;
  color: #2c3e50;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;
