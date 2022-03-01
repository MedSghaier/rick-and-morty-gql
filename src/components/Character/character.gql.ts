import { gql } from "graphql-request";
export const characterQuery = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
        dimension
      }
      location {
        name
        dimension
      }
      image
      created
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;
