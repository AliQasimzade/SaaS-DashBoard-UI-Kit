import React, { useEffect } from "react";
import Content from "./Content";
import "./styles/Dashboard.scss";
import Navigation from "../Navigation/Navigation";
import { useDispatch } from "react-redux";
import { changeList } from "../../redux/actions/actions";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(changeList(0));
  
  }, [dispatch]);
  return (
    <div className="dashboard">
      <Navigation hamburgerBtn={props.hamburgerBtn} sidebar={props.sidebar}/>
      <Content />
    </div>
  );
};

export default Dashboard;
