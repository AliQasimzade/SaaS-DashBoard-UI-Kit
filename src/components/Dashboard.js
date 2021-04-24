import React from 'react';
import Navigation from './Navigation';
import Content from "./Content";
import "../styles/Dashboard.scss";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Navigation />
			<Content />
		</div>
	);
};

export default Dashboard;
