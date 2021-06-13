import React from "react";
import Content from "./Content";
import "./styles/Dashboard.scss";
import Navigation from "../Navigation/Navigation";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <Content />
    </div>
  );
};

export default Dashboard;
