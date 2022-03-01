import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { characterQuery } from "./character.gql";
import useGraphqlRequestClient from "../../hooks/useGraphqlRequest";
import {
  CharacterQuery,
  Episode,
  QueryCharacterArgs,
} from "../../generated/graphql";

import "./character.styles.scss";
import { useMemo, useState } from "react";
import { Oval } from "react-loader-spinner";
import BackBtn from "../BackButton/back-button.component";

const Character = () => {
  const [isChunkedEpisodes, setIsChunkedEpisodes] = useState(true);
  const { characterId } = useParams();
  const { client } = useGraphqlRequestClient();

  const { data, error, isLoading } = useQuery(["character", characterId], () =>
    client.request<CharacterQuery, QueryCharacterArgs>(characterQuery, {
      id: characterId as string,
    })
  );

  const chunkedEpisodes = useMemo(
    () => data?.character?.episode.splice(0, 5),
    [data]
  );

  const episodesRenderer = (episodes: Episode[] | undefined): JSX.Element => {
    return (
      <>
        {episodes && episodes.length > 0 ? (
          episodes.map((episode) => (
            <li key={episode?.id}>
              {episode?.name} | {episode?.episode}
            </li>
          ))
        ) : (
          <li>No episode</li>
        )}
      </>
    );
  };

  return (
    <>
      <BackBtn />
      {!isLoading && data && data.character && (
        <section className="character">
          <div className="character__img">
            <img
              src={data.character.image ?? ""}
              alt={data.character.name ?? ""}
            />
          </div>
          <div className="character__details">
            <h1 className="character__details-title">{data.character.name}</h1>
            <p className="character__details-meta">
              Gender: {data.character.gender}
            </p>
            <p className="character__details-meta">
              Species: {data.character.species}
            </p>
            <p className="character__details-meta">
              Status: {data.character.status}
            </p>
            <p className="character__details-meta">
              Created:{" "}
              {`${new Date(
                data.character.created as string
              ).toLocaleDateString()}`}
            </p>
            <p className="character__details-meta">
              Origin: {data.character.location?.name}
            </p>
            <div className="character__details-meta">
              Episodes:{" "}
              <ul>
                {isChunkedEpisodes
                  ? episodesRenderer(chunkedEpisodes as Episode[])
                  : episodesRenderer(data.character.episode as Episode[])}
              </ul>
            </div>
            <button onClick={() => setIsChunkedEpisodes(!isChunkedEpisodes)}>
              Show {isChunkedEpisodes ? "more" : "less"} episodes
            </button>
          </div>
        </section>
      )}
      {isLoading && (
        <div className="loader-wrapper">
          <Oval color="#fcbf04" height={120} width={120} />
        </div>
      )}
    </>
  );
};

export default Character;
