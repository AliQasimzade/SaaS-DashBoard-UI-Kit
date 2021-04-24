import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import data from './data';
import './styles/App.scss';
import { addData } from './redux/actions/actions.js';
import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(addData(data));
	});
	return (
		<div className="App">
			<Sidebar />
			<Dashboard />
		</div>
	);
};

export default App;
