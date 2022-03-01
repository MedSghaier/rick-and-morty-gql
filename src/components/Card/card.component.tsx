import { CardProps } from "./card.types";
import "./card.styles.scss";
const Card = (props: CardProps) => {
  const { character } = props;
  return (
    <div className="card">
      <div className="card__img">
        <img
          src={character.image ?? ""}
          alt={character.name ?? ""}
          loading="lazy"
        />
      </div>
      <div className="card__body">
        <h2 className="card__title">{character.name}</h2>
        <h4 className="card__subtitle">
          Gender: <span>{character.gender}</span>
        </h4>
        <h4 className="card__subtitle">
          Status: <span>{character.status}</span>
        </h4>
        <h4 className="card__subtitle">
          Species: <span>{character.species}</span>
        </h4>
        <h4 className="card__subtitle">
          Origin:
          <span>
            {character.location?.name},{character.location?.dimension}{" "}
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Card;
