import "./style.css";
import { BsFillCircleFill } from "react-icons/bs";
import Card from "../Card";
import Button from "../Button";
import data from "../../data/tasks";
import { useState } from "react";
import Modal from "../Modal";
import Cancel from "../Cancel";

function Tasks() {
  const [task, setTask] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState("add");
  const [showCancel, setShowCancel] = useState(false);

  function handleShowModal(bool, act) {
    setShowModal(bool);
    setAction(act);
  }

  function handleShowCancel(bool) {
    setShowCancel(bool);
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
                  <Card key={index} title={item.title} showModal={handleShowModal} showCancel={handleShowCancel}/>
                ))}
              </div>
              <div className="c-tasks__buttom d-flex justify-content-center mt-4">
                <Button title="Add New Task" action="add" showModal={handleShowModal}/>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showCancel && <Cancel showCancel={handleShowCancel}/>}
      {showModal && <Modal action={action} showModal={handleShowModal}/>}
      
    </>
    
  );
}

export default Tasks;
