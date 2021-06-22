import React, { useEffect } from "react";
import Content from "./Content";
import "./styles/Dashboard.scss";
import Navigation from "../Navigation/Navigation";
import { useDispatch } from "react-redux";
import { changeList } from "../../redux/actions/actions";
import axios from "axios"
import {getChartData} from "../../redux/actions/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeList(0));
    axios.get("https://herokuhosting2.herokuapp.com/getChart")
    .then(res => {
      dispatch(getChartData(res.data.Chart));
    })
    
  }, [dispatch]);
  return (
    <div className="dashboard">
      <Navigation />
      <Content />
    </div>
  );
};

export default Dashboard;
