import React from "react";
import "./styles/App.scss";
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
