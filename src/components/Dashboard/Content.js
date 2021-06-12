import React from "react";
import Tasks from "../Tasks/Tasks";
import TasksChart from "../TaskChart/TasksChart";
import DealsGraphic from "../DealsGraphic/DealsGraphic";
import "./styles/Content.scss";
import "./styles/Content-Media.scss";

const Content = () => {
  return (
    <div className="content">
      <Tasks />
      <div className="charts">
        <DealsGraphic />
        <TasksChart />
      </div>
    </div>
  );
};

export default Content;
