import React from "react";
import "./styles/Tasks.scss";
import TasksInfo from "./TasksInfo";
import CompletedTask from "./CompletedTask";
import EndedTask from "./EndedTask";
import EventTask from "./EventTask";
import { NavLink } from "react-router-dom";
import "./styles/Tasks-Media.scss";

const Tasks = () => {
  return (
    <main className="tasks">
      <TasksInfo />
      <CompletedTask />
      <EndedTask />
      <EventTask />
      <NavLink to="/dashboard">Show more</NavLink>
    </main>
  );
};

export default Tasks;
