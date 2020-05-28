import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const LoginCard = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values: any) => console.log(values);

  const hasErrors = errors.email || errors.password;
  return (
    <LoginCardForm onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel hasErrors={errors.email}>Email</InputLabel>
        <InputField
          hasErrors={errors.email}
          name="email"
          type="email"
          placeholder="Email"
          ref={register({
            required: "Please enter an email.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address"
            }
          })}
        />
        <InputError>{errors.email && errors.email.message}</InputError>
      </InputContainer>
      <InputContainer>
        <InputLabel hasErrors={errors.password}>Password</InputLabel>
        <InputField
          hasErrors={errors.password}
          name="password"
          type="password"
          placeholder="Password"
          ref={register({
            required: "Please enter a password",
            validate: (value) =>
              value === "password" || "Please enter correct password."
          })}
        />
        <InputError>{errors.password && errors.password.message}</InputError>
      </InputContainer>
      <LoginButton type="submit" hasErrors={hasErrors} value="Login" />
      <CreateAccountText>
        Don't have an account?
        <CreateAccountLink to="/signup"> Create one!</CreateAccountLink>
      </CreateAccountText>
    </LoginCardForm>
  );
};

export default LoginCard;

interface StyleProps {
  hasErrors: boolean;
}

const LoginCardForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  padding: 30px;
  width: 30%;
  min-width: 250px;
  height: 500px;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 14px 5px rgba(232, 232, 232, 1);
  -moz-box-shadow: 0px 0px 14px 5px rgba(232, 232, 232, 1);
  box-shadow: 0px 0px 14px 5px rgba(232, 232, 232, 1);
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputLabel = styled.label<StyleProps>`
  font-size: 20px;
  font-weight: bold;
  color: ${({ hasErrors }) => (hasErrors ? "#f76140" : "#2c3e50")};
`;

const LoginButton = styled.input<StyleProps>`
  height: 50px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${({ hasErrors }) => (hasErrors ? "#f76140" : " #2c3e50")};
  color: ${({ hasErrors }) => (hasErrors ? "#f76140" : "#2c3e50")};
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;

  :hover {
    color: white;
    background-color: ${({ hasErrors }) =>
      hasErrors ? "#f76140" : " #2c3e50"};
    border-color: ${({ hasErrors }) => (hasErrors ? "#f76140" : "#2c3e50")};
  }
`;

const InputField = styled.input<StyleProps>`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border-radius: 4px;
  font-size: 16px;
  border: 2px solid ${({ hasErrors }) => (hasErrors ? "#f76140" : " #2c3e50")};
`;

const InputError = styled.p`
  color: #f76140;
  margin-top: 10px;
  font-size: 16px;
`;

const CreateAccountText = styled.p`
  color: #2c3e50;
  font-weight: 600;
  text-align: center;
`;

const CreateAccountLink = styled(Link)`
  color: aquamarine;
  text-decoration: none;
  :hover {
    color: #2c3e50;
  }
`;