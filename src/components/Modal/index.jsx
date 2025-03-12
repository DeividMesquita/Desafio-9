import { MdClose } from "react-icons/md";
import Button from "../Button";
import "./style.css";

function Modal() {
  return (
    <div className="container-modal">
      <div className="modal-box">
        <div className="modal-header">
          <h1>Add New Task</h1>
          <MdClose />
        </div>
        <div className="modal-content">
          <form>
            <div>
              <label htmlFor="input">Task Title</label>
              <input type="text" id="input" />
            </div>
            <div className="modal-radio">
              <label>Task Status</label>
              <div>
                <div className="modal-radio__item">
                  <label>To Do</label>
                  <input type="radio" />
                </div>
                <div className="modal-radio__item">
                  <label>Doing</label>
                  <input type="radio" />
                </div>
                <div className="modal-radio__item">
                  <label>Testing</label>
                  <input type="radio" />
                </div>
                <div className="modal-radio__item">
                  <label>Done</label>
                  <input type="radio" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <Button title={"Confirm"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
