import { MdClose } from "react-icons/md";
import Button from "../Button";
import "./style.css";
import { useState, useEffect } from "react";

function Modal({ showModal, action, task, setTask, taskToEdit }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  // Preenche os campos do formulário ao abrir o modal para edição
  useEffect(() => {
    if (action === "edit" && taskToEdit) {
      setTitle(taskToEdit.title);
      setStatus(taskToEdit.status);
    }
  }, [action, taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !status) {
      alert("Please fill in all fields");
      return;
    }

    if (action === "add") {
      // Adiciona uma nova tarefa
      const newTask = {
        id: Date.now(),
        title: title,
      };

      const updatedTasks = task.map((column) => {
        if (column.status === status) {
          return {
            ...column,
            items: [...column.items, newTask],
          };
        }
        return column;
      });

      setTask(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } else if (action === "edit") {
      // Edita uma tarefa existente
      const updatedTasks = task.map((column) => {
        if (column.status === taskToEdit.status) {
          return {
            ...column,
            items: column.items.filter((item) => item.id !== taskToEdit.id),
          };
        }
        return column;
      }).map((column) => {
        if (column.status === status) {
          return {
            ...column,
            items: [...column.items, { id: taskToEdit.id, title }],
          };
        }
        return column;
      });

      setTask(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    showModal(false);
  };

  return (
    <div className="container-modal ">
      <div className="modal-box">
        <div className="modal-header">
          <h1>{action === "add" ? "Add New Task" : "Edit Task"}</h1>
          <button
            className="modal-header__close"
            onClick={() => showModal(false)}
          >
            <MdClose />
          </button>
        </div>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-input">
              <label htmlFor="input">Task Title</label>
              <input
                type="text"
                id="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
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
                      value="To Do"
                      checked={status === "To Do"}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    <label>To Do</label>
                  </div>
                  <div className="modal-radio__item">
                    <input
                      type="radio"
                      name="taskStatus"
                      className="form-check-input"
                      value="Testing"
                      checked={status === "Testing"}
                      onChange={(e) => setStatus(e.target.value)}
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
                      value="Doing"
                      checked={status === "Doing"}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    <label>Doing</label>
                  </div>
                  <div className="modal-radio__item">
                    <input
                      type="radio"
                      name="taskStatus"
                      className="form-check-input"
                      value="Done"
                      checked={status === "Done"}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    <label>Done</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <Button title={"Confirm"} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;