import React from "react";
import associatedImage from "../../images/George.png";
import "./styles/CompletedTask.scss";

const CompletedTask = () => {
  return (
    <section>
      <div className="section-two">
        <div className="section-two-header">
          <p>Send benefit review by Sunday</p>
          <span>Reminder</span>
        </div>
        <div className="due-date">
          <span>Due date:</span>
          <p>December 23, 2018</p>
        </div>
        <div className="completed">
          <div className="person">
            <div className="person-image">
              <img src={associatedImage} alt="associated_image" />
            </div>
            <p>George Fields</p>
          </div>
          <button>Completed</button>
        </div>
      </div>
    </section>
  );
};

export default CompletedTask;
