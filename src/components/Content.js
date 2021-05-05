import React from 'react';
import Tasks from './Tasks';
import TasksChart from './TasksChart';
import DealsGraphic from './DealsGraphic';
import '../styles/Content.scss';

const Content = () => {
	return (
		<div className="content">
			<Tasks />
			<div className="charts">
			<DealsGraphic />
			<TasksChart />
			</div>
		</div>
	);
};

export default Content;
