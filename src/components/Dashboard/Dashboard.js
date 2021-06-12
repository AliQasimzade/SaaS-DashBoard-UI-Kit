import React,{ useEffect } from "react";
import Content from "./Content";
import "./styles/Dashboard.scss";
import Navigation from "../Navigation/Navigation";
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const heh = useSelector((state) =>state.productReducer.items.Lists)
  useEffect(() =>{
    console.log(heh)
  },[heh])
  return (
    <div className="dashboard">
      <Navigation />
      <Content />
    </div>
  );
};

export default Dashboard;
