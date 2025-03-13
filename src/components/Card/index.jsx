import "./style.css";
import Icons from "../Icons";

function Card({ title, showModal, showCancel }) {
  return (
    <div className="c-cards__box">
      <div className="c-cards__title">
        <h1>{title}</h1>
      </div>
      <Icons showModal={showModal} showCancel={showCancel}/>
    </div>
  );
}

export default Card;
