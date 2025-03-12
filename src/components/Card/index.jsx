import "./style.css";
import Icons from "../Icons";

function Card({ title }) {
  return (
    <div className="c-cards__box">
      <div className="c-cards__title">
        <h1>{title}</h1>
      </div>
      <Icons />
    </div>
  );
}

export default Card;
