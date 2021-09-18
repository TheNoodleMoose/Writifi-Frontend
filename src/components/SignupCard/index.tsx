import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP } from "./queries";
import AuthContext from "../../utils/auth-context";

const SignupCard = () => {
  const authContext = useContext(AuthContext);

  const history = useHistory();
  const [signup, { error: signupErrors }] = useMutation(SIGNUP, {
    onCompleted: ({ signup: signupResponse }) => {
      if (signupResponse.token) {
        authContext.login(signupResponse.token, signupResponse.user.id);
        history.push("/");
      }
    }
  });

  const onSubmit = (values: {
    email: string;
    password: string;
    username: string;
  }) => {
    signup({
      variables: {
        email: values.email,
        password: values.password,
        username: values.username
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: ""
    },

    onSubmit: (values) => onSubmit(values)
  });
  const hasErrors = !!(
    formik.errors.email ||
    formik.errors.password ||
    signupErrors
  );

  return (
    <SignupCardForm onSubmit={formik.handleSubmit}>
      <InputContainer>
        <InputLabel hasErrors={!!formik.errors.username}>Username</InputLabel>
        <InputField
          hasErrors={!!formik.errors.username}
          name="username"
          type="username"
          placeholder="Username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <InputError>
          {formik.errors.username && formik.errors.username[0]}
        </InputError>
      </InputContainer>
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
      <SignupButton type="submit" hasErrors={hasErrors} value="Signup" />
      <InputError>{signupErrors?.message}</InputError>
      <CreateAccountText>
        Already have an account?
        <CreateAccountLink to="/login"> Login!</CreateAccountLink>
      </CreateAccountText>
    </SignupCardForm>
  );
};

export default SignupCard;

interface StyleProps {
  hasErrors: boolean;
}

const SignupCardForm = styled.form`
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

const SignupButton = styled.input<StyleProps>`
  height: 50px;
  min-height: 50px;
  background: transparent;
  border-radius: 3px;
  margin-bottom: 20px;
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
