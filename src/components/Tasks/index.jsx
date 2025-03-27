import { useState, useEffect } from "react";
import "./style.css";
import { BsFillCircleFill } from "react-icons/bs";
import Card from "../Card";
import Button from "../Button";
import data from "../../data/tasks";
import Modal from "../Modal";
import Cancel from "../Cancel";

function Tasks() {
  const [task, setTask] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null); // Armazena a tarefa que será editada

  // Carrega as tarefas do localStorage ao montar o componente
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTask(JSON.parse(storedTasks)); // Carrega as tarefas salvas
    } else {
      setTask(data); // Usa os dados padrão se não houver nada no localStorage
    }
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState("add");
  const [showCancel, setShowCancel] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  function handleShowModal(bool, act, task = null) {
    setShowModal(bool);
    setAction(act);
    setTaskToEdit(task); // Define a tarefa a ser editada
  }

  function handleShowCancel(bool, task = null) {
    setShowCancel(bool);
    setTaskToDelete(task);
  }

  function handleDeleteTask(taskId, taskStatus) {
    const updatedTasks = task.map((column) => {
      if (column.status === taskStatus) {
        return {
          ...column,
          items: column.items.filter((item) => item.id !== taskId),
        };
      }
      return column;
    });

    setTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setShowCancel(false);
  }

  return (
    <>
      <div className="container-xxl">
        <div className="c-tasks">
          {task.map((column, index) => (
            <div key={index} className="c-tasks__column">
              <div className="c-tasks__header">
                <div className="c-tasks__header__title">
                  <BsFillCircleFill color={column.color} />
                  <h1>{column.status}</h1>
                </div>
                <p className="m-0">{column.items.length} total</p>
              </div>
              <div className="c-tasks__cards">
                {column.items.map((item, index) => (
                  <Card
                    key={index}
                    title={item.title}
                    showModal={(bool, act) =>
                      handleShowModal(bool, act, {
                        id: item.id,
                        title: item.title,
                        status: column.status,
                      })
                    }
                    showCancel={() =>
                      handleShowCancel(true, {
                        id: item.id,
                        status: column.status,
                      })
                    }
                  />
                ))}
              </div>
              <div className="c-tasks__buttom d-flex justify-content-center mt-4">
                <Button
                  title="Add New Task"
                  action="add"
                  showModal={handleShowModal}
                  type="button"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {showCancel && (
        <Cancel
          showCancel={handleShowCancel}
          onDelete={() =>
            handleDeleteTask(taskToDelete.id, taskToDelete.status)
          }
        />
      )}
      {showModal && (
        <Modal
          action={action}
          showModal={handleShowModal}
          task={task}
          setTask={setTask}
          taskToEdit={taskToEdit} // Passa a tarefa a ser editada
        />
      )}
    </>
  );
}

export default Tasks;
