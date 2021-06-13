import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData, changeList } from "./redux/actions/actions";
import "./styles/App.scss";
import axios from "axios";
import Sidebar from "./components/Sidebar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Contacts from "./components/Contacts/Contacts";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://herokuhosting2.herokuapp.com/getData")
      .then((res) => dispatch(addData(res.data.Lists)))
      .catch((err) => console.log(err));

    if (window.location.href.includes("/dashboard")) {
      dispatch(changeList(0));
      
    } else {
      dispatch(changeList(3));
    }
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Redirect push to="/dashboard" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
