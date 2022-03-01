import { useState } from "react";
import useGraphqlRequestClient from "../../hooks/useGraphqlRequest";
import { useQuery } from "react-query";
import { Oval } from "react-loader-spinner";
import Select from "react-select";

import charactersQuery from "./characters.gql";
import Card from "../Card/card.component";
import {
  Character,
  CharactersQuery,
  FilterCharacter,
} from "../../generated/graphql";

// Styles
import "./characters.styles.scss";
import { TextField } from "../TextField/textField.component";

const CharactersList = () => {
  const { client } = useGraphqlRequestClient();
  const options = [
    { value: "", label: "Show all" },
    {
      label: "Status",
      options: [
        { value: "Alive", label: "Alive" },
        { value: "Dead", label: "Dead" },
        { value: "unknown", label: "Unknown" },
      ],
    },
    {
      label: "Species",
      options: [
        { value: "Alien", label: "Alien" },
        { value: "Human", label: "Human" },
      ],
    },
    {
      label: "Gender",
      options: [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
      ],
    },
  ];
  const [filterBy, setFilterBy] = useState<string>("");

  const { data, error, isLoading } = useQuery("characters", () =>
    client.request<CharactersQuery>(charactersQuery)
  );
  return (
    <>
      <h1 className="characters-title">Characters</h1>
      <header className="header">
        <TextField placeholder="Search by character name" />
        <Select
          onChange={(newValue) => setFilterBy(newValue?.value || "")}
          options={options}
          placeholder="Filter by..."
        />
      </header>
      <div className="characters-wrapper">
        <>
          {!isLoading &&
            data &&
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

          {isLoading && (
            <div className="loader-wrapper">
              <Oval color="#fcbf04" height={120} width={120} />
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default CharactersList;
