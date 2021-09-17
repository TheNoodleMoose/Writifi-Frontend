import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import styled from "styled-components";
import { LOGIN } from "./queries";
import AuthContext from "../../utils/auth-context";

const LoginCard = () => {
  const authContext = useContext(AuthContext);
  const [errors, setErrors] = useState<{ authError?: { message?: string } }>(
    {}
  );
  const history = useHistory();
  const [login, { error: loginErrors }] = useMutation(LOGIN, {
    onCompleted: ({ login: loginResponse }) => {
      if (loginResponse.token) {
        authContext.login(loginResponse.token, loginResponse.user.id);
        history.push("/");
      }
    },
    onError: (error) => {
      if (error.message === "GraphQL error: Invalid password") {
        setErrors({ authError: { message: "Invalid password or email" } });
      }
    }
  });

  const onSubmit = async (values: { email: string; password: string }) => {
    login({
      variables: { email: values.email, password: values.password }
    });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    onSubmit: (values) => onSubmit(values)
  });

  const hasErrors = !!(
    formik.errors.email ||
    formik.errors.password ||
    loginErrors
  );

  return (
    <LoginCardForm onSubmit={formik.handleSubmit}>
      <InputContainer>
        <InputLabel hasErrors={!!formik.errors.email}>Email</InputLabel>
        <InputField
          hasErrors={!!formik.errors.email}
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <InputError>{formik.errors.email && formik.errors.email[0]}</InputError>
      </InputContainer>
      <InputContainer>
        <InputLabel hasErrors={!!formik.errors.password}>Password</InputLabel>
        <InputField
          hasErrors={!!formik.errors.password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <InputError>
          {formik.errors.password && formik.errors.password[0]}
        </InputError>
      </InputContainer>
      <LoginButton type="submit" hasErrors={hasErrors} value="Login" />
      <InputError>{errors && errors?.authError?.message}</InputError>

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
    height: 400px;
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

  :focus {
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
  :focus {
    border: 2px solid ${({ hasErrors }) => (hasErrors ? "#f76140" : " #2c3e50")};
  }
`;

const InputError = styled.p`
  color: #f76140;
  margin: 10px 0;
  font-size: 16px;
`;

const CreateAccountText = styled.p`
  color: #2c3e50;
  font-weight: 600;
  text-align: center;
`;

const CreateAccountLink = styled(Link)`
  color: #478570;
  text-decoration: none;
  :hover {
    color: #2c3e50;
  }
`;
