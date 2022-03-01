import useGraphqlRequestClient from "../../hooks/useGraphqlRequest";
import { useQuery } from "react-query";
import { charactersQuery } from "./characters.gql";
import { Character, CharactersQuery } from "../../generated/graphql";

import Card from "../Card/card.component";

// Styles
import "./characters.styles.scss";

const CharactersList = () => {
  const { client } = useGraphqlRequestClient();

  const { data, error, isLoading } = useQuery("characters", () =>
    client.request<CharactersQuery>(charactersQuery)
  );
  return (
    <>
      <h1 className="characters-title">Characters</h1>
      <div className="characters-wrapper">
        <>
          {data &&
            data?.characters?.results &&
            data?.characters?.results.length > 0 &&
            data?.characters?.results.map((character) => {
              return (
                character && (
                  <div key={character.id} className="character-col">
                    {character && <Card character={character as Character} />}
                  </div>
                )
              );
            })}
        </>
      </div>
    </>
  );
};

export default CharactersList;
