import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text?: String;
  handleClick?: () => void;
}

const Button = ({ text, handleClick }: ButtonProps) => {
  return (
    <StyledButton data-testid="Button" onClick={handleClick}>
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #2c3e50;
  color: #2c3e50;
  padding: 0 20px;

  :hover {
    color: white;
    background-color: #2c3e50;
    border-color: #2c3e50;
  }
`;

const ButtonText = styled.p`
  font-weight: bold;
  font-size: 1em;
  margin: 10px 0;
`;
