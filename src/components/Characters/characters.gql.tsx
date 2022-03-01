import { gql } from "graphql-request";
export const charactersQuery = gql`
  query Characters {
    characters {
      results {
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
      }
    }
  }
`;
