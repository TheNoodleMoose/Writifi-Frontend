import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        id
        stories {
          title
          id
          description
          createdAt
        }
      }
    }
  }
`;
