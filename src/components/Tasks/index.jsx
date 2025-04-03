import { useState, useEffect } from "react";
import "./style.css";
import { BsFillCircleFill } from "react-icons/bs";
import Card from "../Card";
import Button from "../Button";
import data from "../../data/tasks";
import Modal from "../Modal";
import Cancel from "../Cancel";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

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

  // Função para abrir o modal de edição ou adição de tarefa
  function handleShowModal(bool, act, task = null) {
    setShowModal(bool);
    setAction(act);
    setTaskToEdit(task); // Define a tarefa a ser editada
  }

  // Função para abrir o modal de cancelamento
  function handleShowCancel(bool, task = null) {
    setShowCancel(bool);
    setTaskToDelete(task);
  }

  // Função para lidar com a exclusão de uma tarefa
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
  
  function handleUpTask(taskId, taskStatus) {
    const updatedTasks = task.map((column) => {
      if (column.status === taskStatus) {
        const taskIndex = column.items.findIndex((item) => item.id === taskId);
        if (taskIndex > 0) {
          const reorderedItems = [...column.items];
          const [movedTask] = reorderedItems.splice(taskIndex, 1);
          reorderedItems.splice(taskIndex - 1, 0, movedTask);
          return { ...column, items: reorderedItems };
        }
      }
      return column;
    });

    setTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // Função para lidar com o reordenamento das tarefas
  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  // Função chamada quando o drag and drop termina
  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      const column = task.find((col) => col.status === source.droppableId);
      const reorderedItems = reorder(
        column.items,
        source.index,
        destination.index
      );

      const updatedTasks = task.map((col) => {
        if (col.status === source.droppableId) {
          return { ...col, items: reorderedItems };
        }
        return col;
      });

      setTask(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
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
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable
                  droppableId={column.status}
                  type="list"
                  direction="vertical"
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="c-tasks__cards"
                    >
                      {column.items.map((item, index) => (
                        <Card
                          index={index}
                          key={item.id} // usa o id como chave única
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
                          upTask={() =>
                            handleUpTask(item.id, column.status)
                          }
                        />
                      ))}

                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
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
