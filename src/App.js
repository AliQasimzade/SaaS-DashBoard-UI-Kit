import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addData } from "./redux/actions/actions";
import "./styles/App.scss";
import axios from "axios";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Contacts from "./components/Contacts";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://herokuhosting2.herokuapp.com/getData")
      .then((res) => dispatch(addData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);
  const route = useSelector((state => state.changeListReducer))
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Redirect push to={route.key === 0 ? "/dashboard" : "/contacts"} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;