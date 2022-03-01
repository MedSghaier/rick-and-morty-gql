import { GraphQLClient } from "graphql-request";

const API_URL = "https://rickandmortyapi.com/graphql";

function useGraphqlRequestClient(): { client: GraphQLClient } {
  const endpoint = API_URL;

  const client = new GraphQLClient(endpoint);

  return { client };
}

export default useGraphqlRequestClient;
