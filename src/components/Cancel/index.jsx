import "./style.css";
import Button from "../Button";
import { useState } from "react";

function Cancel({ showCancel, onDelete }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onDelete) {
      onDelete(); // Chama a função de deletar passada como prop
    }
    showCancel(false);
  };

  return (
    <div className="cancel-container">
      <div className="cancel-box">
        <h2>Are you sure you want to delete this task?</h2>
        <form onSubmit={handleSubmit}>
          <div className="cancel-button--div">
            <div className="cancel-button" onClick={() => showCancel(false)}>
              <Button title="Cancel it" className="cancel-it"/>
            </div>
            <div className="delete-button">
              <Button title="Delete it" className="delete-red" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cancel;