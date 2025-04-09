import "./style.css";
import { BsArrowUp, BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

function Icons({showModal, showCancel, upTask}) {
  return (
      <div className="c-icons">
        <button className="c-icons__item arrow" onClick={() => upTask(true)}>
          <BsArrowUp />
        </button>
        <div className="c-icons__actions">
          <button className="c-icons__item" onClick={() => showModal(true, "edit")}>
            <BsFillPencilFill/>
          </button>
          <button className="c-icons__item" onClick={()=> showCancel(true)}>
            <BsFillTrashFill />
          </button>
        </div>
      </div>
  );
}

export default Icons;
