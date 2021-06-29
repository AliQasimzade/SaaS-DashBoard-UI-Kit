import React, { useRef } from "react";
import "./styles/App.scss";
import Sidebar from "./components/Sidebar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Contacts from "./components/Contacts/Contacts";
import "./styles/App-Media.scss";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const containerEl = useRef(null);
  const hamburgerBtn = useRef(null);
  const sidebar = useRef(null);
  return (
    <Router>
      <div className="App">
        <Sidebar
          sidebar={sidebar}
          containerEl={containerEl}
          hamburgerBtn={hamburgerBtn}
        />
        <div className="container" ref={containerEl}>
          <Switch>
            <Route exact path="/dashboard">
              <Dashboard hamburgerBtn={hamburgerBtn} sidebar={sidebar} />
            </Route>
            <Route path="/contacts">
              <Contacts hamburgerBtn={hamburgerBtn} sidebar={sidebar} />
            </Route>
            <Redirect push to="/dashboard" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
