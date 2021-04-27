import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import data from "./data";
import "./styles/App.scss";
import { addData } from "./redux/actions/actions.js";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const loggedIn = true
  useEffect(() => {
    dispatch(addData(data));
    
  });
  return (
    <Router>
    <div className="App">
    <Sidebar />
      <Switch>
        <Route excat path="/">
        {loggedIn ? <Redirect to="/dashboard" /> : ''}
        
        <Dashboard />
        </Route>
      </Switch>
    </div>
    </Router>
  );
};

export default App;
