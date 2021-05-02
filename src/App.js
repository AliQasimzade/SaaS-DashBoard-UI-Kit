import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';
import {addData} from './redux/actions/actions';
import "./styles/App.scss";
import axios from "axios";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Contacts from './components/Contacts';

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

  
  return (
		<Router>
			<div className="App">
				<Sidebar />
				<Switch>
					<Redirect exact from="/" to="/dashboard" />
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route path="/contacts">
						<Contacts />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
