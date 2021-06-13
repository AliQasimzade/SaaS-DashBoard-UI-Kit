import React from "react";
import associatedImage1 from "../../images/Rebecca.png";
import Ellipse from "../../images/Ellipse.png";
import Ellipse1 from "../../images/Ellipse (1).png";
import Edit from "../../images/edit.png";
import Delete from "../../images/delete.png";
import "./styles/EndedTask.scss";

const EndedTask = () => {
  return (
    <section>
      <div className="section-three">
        <div className="section-three-header">
          <p>Invite to office meet-up</p>
          <span>Call</span>
        </div>
        <div className="due-date">
          <span>Due date : </span>
          <p>December 23, 2018</p>
        </div>
        <div className="ended">
          <div className="person">
            <div className="person-image">
              <img src={associatedImage1} alt="" />
            </div>
            <p>Rebecca Moore</p>
          </div>
          <div className="edit-delete-person">
            <div className="edit-delete-icons">
              <img src={Ellipse} alt="ellipse" />
              <img src={Ellipse1} alt="ellipse1" />
              <img src={Edit} alt="edit" title="edit" />
              <img src={Delete} alt="delete" title="delete" />
            </div>
            <button>Ended</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndedTask;
