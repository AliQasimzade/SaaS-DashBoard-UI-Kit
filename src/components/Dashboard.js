import React from "react";
import Navigation from "./Navigation";
import Content from "./Content";
import "../styles/Dashboard.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <Router>
        <Route>
          <Switch>
            <Route excat path="/dashboard">
              <Content />
            </Route>
          </Switch>
        </Route>
      </Router>
    </div>
  );
};

export default Dashboard;
