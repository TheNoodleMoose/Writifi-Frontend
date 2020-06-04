import gql from "graphql-tag";

export const SIGNUP = gql`
  mutation signup($email: String!, $password: String!, $username: String!) {
    signup(email: $email, password: $password, username: $username) {
      token
      user {
        id
      }
    }
  }
`;
