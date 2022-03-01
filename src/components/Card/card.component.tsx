import { CardProps } from "./card.types";
import "./card.styles.scss";
import { Link } from "react-router-dom";
const Card = (props: CardProps) => {
  const { character } = props;
  return (
    <div className="card">
      <Link to={`${character.id}`} className="card__img">
        <img
          src={character.image ?? ""}
          alt={character.name ?? ""}
          loading="lazy"
        />
      </Link>
      <div className="card__body">
        <Link to={`${character.id}`} className="card__title">
          <h2>{character.name}</h2>
        </Link>
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
