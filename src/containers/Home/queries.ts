import gql from "graphql-tag";

export const GET_FEED = gql`
  query GetFeed {
    feed {
      id
      url
      description
    }
  }
`;
