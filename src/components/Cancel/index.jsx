import "./style.css";
import Button from "../Button";

function Cancel({ showCancel }) {
  return (
    <div className="cancel-container">
      <div className="cancel-box">
        <h2>Are you sure you want to delete this task?</h2>
        <div className="cancel-buttons">
          <button className="cancel-button" onClick={() => showCancel(false)}>
              <Button title="Cancel it"/>
          </button>
          <div className="delete-button">
            <Button title="Delete it" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cancel;
