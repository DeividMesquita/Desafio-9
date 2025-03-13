import { MdClose } from "react-icons/md";
import Button from "../Button";
import "./style.css";

function Modal({ showModal, action }) {
  return (
    <div className="container-modal ">
      <div className="modal-box">
        <div className="modal-header">
          <h1>
            {action === "add" ? "Add New Task" : "Edit Task"}
          </h1>
          <button className="modal-header__close"  onClick={() => showModal(false)}>
            <MdClose/>
          </button>
        </div>
        <div className="modal-content">
          <form>
            <div className="modal-input">
              <label htmlFor="input">Task Title</label>
              <input type="text" id="input" />
            </div>
            <div className="modal-radio">
              <label className="mb-2">Task Status</label>
              <div className="modal-radio__group">
                <div className="d-flex flex-column gap-2">
                  <div className="modal-radio__item">
                    <input
                      type="radio"
                      name="taskStatus"
                      className="form-check-input"
                    />
                    <label>To Do</label>
                  </div>
                  <div className="modal-radio__item">
                    <input
                      type="radio"
                      name="taskStatus"
                      className="form-check-input"
                    />
                    <label>Testing</label>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <div className="modal-radio__item">
                    <input
                      type="radio"
                      name="taskStatus"
                      className="form-check-input"
                    />
                    <label>Doing</label>
                  </div>
                  <div className="modal-radio__item">
                    <input
                      type="radio"
                      name="taskStatus"
                      className="form-check-input"
                    />
                    <label>Done</label>
                  </div>
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
