import "./style.css";
import { BsArrowUp, BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

function Icons() {
  return (
    <div className="c-icons">
      <div className="c-icons__item">
        <BsArrowUp />
      </div>
      <div className="c-icons__actions">
        <div className="c-icons__item">
          <BsFillPencilFill />
        </div>
        <div className="c-icons__item">
          <BsFillTrashFill />
        </div>
      </div>
    </div>
  );
}

export default Icons;
