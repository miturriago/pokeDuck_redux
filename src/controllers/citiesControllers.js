import gql from "graphql-tag";

export const GET_ALL_CITIES = gql`
  query {
    getAllCities {
      id
      name
    }
  }
`;
