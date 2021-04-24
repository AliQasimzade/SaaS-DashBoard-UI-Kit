import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import data from './data';
import './styles/App.scss';
import { addData } from './redux/actions/actions.js';
import Navigation from "./components/Navigation";
import Sidebar from "./components/SideBar";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(addData(data));
	});
	return (
		<div className="App">
			<Sidebar />
			<Navigation />
		</div>
	);
};

export default App;
