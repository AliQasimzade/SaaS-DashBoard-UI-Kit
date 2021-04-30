import React, { useEffect } from "react";

import "./styles/App.scss";
import axios from "axios";

import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const loggedIn = true;
  useEffect(() => {
    axios
      .get("https://herokuhosting2.herokuapp.com/getData")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route excat path="/">
            {loggedIn ? <Redirect to="/dashboard" /> : ""}

            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
