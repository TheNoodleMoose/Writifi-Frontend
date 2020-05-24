import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text?: String;
  handleClick?: () => void;
}

const Button = ({ text, handleClick }: ButtonProps) => {
  return (
    <StyledButton data-testid="Button" onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
