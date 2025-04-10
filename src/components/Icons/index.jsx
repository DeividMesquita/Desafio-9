import "./style.css";
import { BsArrowUp, BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

function Icons({showModal, showCancel, upTask}) {
  return (
      <div className="icons">
        <button className="icons__item" onClick={() => upTask(true)}>
          <BsArrowUp />
        </button>
        <div className="icons__actions">
          <button className="icons__item" onClick={() => showModal(true, "edit")}>
            <BsFillPencilFill/>
          </button>
          <button className="icons__item" onClick={()=> showCancel(true)}>
            <BsFillTrashFill />
          </button>
        </div>
      </div>
  );
}

export default Icons;
