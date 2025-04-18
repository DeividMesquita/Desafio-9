import "./style.css";
import Icons from "../Icons";
import { Draggable } from "@hello-pangea/dnd";

function Card({ title, showModal, showCancel, task, index, upTask }) {
  return (
    <Draggable draggableId={(task && task.id ? task.id.toString() : `draggable-${index}`)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="cards__box"
        >
          <div className="cards__title">
            <h1>{title}</h1>
          </div>
          <Icons showModal={showModal} showCancel={showCancel} upTask={upTask}/>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
