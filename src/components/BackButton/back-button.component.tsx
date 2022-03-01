import { Link } from "react-router-dom";
import "./back-button.styles.scss";
const BackBtn = () => (
  <Link to="/" className="back-btn">
    <span>←</span>
  </Link>
);

export default BackBtn;
