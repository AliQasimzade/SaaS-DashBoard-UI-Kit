import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import '../styles/TasksChart.scss';

const TasksChart = () => {
	const [options] = useState({
		series: [20, 60, 10],
		labels: ['Active', 'Completed', 'Ended'],
		plotOptions: {
			pie: {
				donut: {
					size: 95,
					rotate: -45,
					labels: {
						show: true,
						name: {
							show: false,
						},
						value: {
							show: true,
							color: '#2ED47A',
							fontSize: '56px',
							offsetY: +20,
							formatter: function (val) {
								return val + '%';
							},
						},
						total: {
							show: true,
							color: 'blue',
							formatter: (val) => {
								return val.config.series.filter((item) => item === 60) + '%';
							},
						},
					},
				},
			},
		},

		stroke: {
			colors: ['#FFB946', '#2ED47A', '#F7685B'],
			width: 1,
			lineCap: 'round',
		},
		chart: {
			type: 'donut',
		},
		colors: ['orange', 'green', 'red'],

		fill: {
			colors: ['#FFB946', '#2ED47A', '#F7685B'],
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			position: 'right',
			offsetY: 60,
			fontFamily: 'sans-serif',
		},
	});
	return (
		<div className="tasks-chart">
			<div className="donut-chart-tasks">
				<p>Tasks</p>
				<div className="show-chart">
					<p>Show</p>: <span>This week</span>
				</div>
			</div>
			<ReactApexChart
				options={options}
				series={options.series}
				type="donut"
				style={{ width: '370px' }}
				className="donut"
			/>
		</div>
	);
};

export default TasksChart;
