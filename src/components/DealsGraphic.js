import React, { useState } from 'react';
import '../styles/DealsGraphic.scss';
import ReactApexChart from 'react-apexcharts';
import { makeStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));
const DealsGraphic = () => {
	const [options] = useState({
		series: [{
			    name:"Closed deals",
				type: 'area',
				data: [50, 100, 95, 170, 60, 160, 150],
			}
		],
		options: {
			grid: {
				show: true,
				borderColor: '#D7DBDE',
				strokeWidth: 1,
				strokeDashArray: 6,
			},
			markers: {
				colors: '#fff',
				strokeColors: '#109CF1',
				strokeWidth: 2,
				strokeOpacity: 0.9,
				hover: {
					size: undefined,
					sizeOffset: 4,
				},
			},
			stroke: {
				curve: 'smooth',
				width: 2,
				lineCap: 'round',
				show: true,
				dashArray: 0,
			},
			tooltip: {
				enabled: true,
				style: {
					fontSize: '16px',
					fontFamily: 'Lato',
				},
				x: {
					show: false,
				},
				y: {
					title: {
						formatter: (seriesName) => seriesName.data,
					},
				},
			},

			chart: {
				type: 'area',
				stacked: false,
				height: 350,
				zoom: {
					enabled: false,
				},
				toolbar: {
					tools: {
						download: false,
					},
				},
			},
			dataLabels: {
				enabled: false,
			},

			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					inverseColors: false,
					opacityFrom: 0.45,
					opacityTo: 0.05,
					stops: [20, 100, 100, 100],
				},
			},
			yaxis: {
				tickAmount: 4,
				min: 0,
				max: 200,
				labels: {
					style: {
						colors: '#8e8da4',
					},
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
			},
			xaxis: {
				type: 'category',
				categories: ['1 Dec', '', '8 Dec', '', '16 Dec', '', '31 Dec'],
				axisBorder: {
					show: false,
				},
			},

			legend: {
				position: 'top',
				horizontalAlign: 'right',
				offsetX: -10,
			},
		},
	});
	const classes = useStyles();
	const [age, setAge] = useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<div className="deals-graphic">
			<div className="area-chart-tasks">
				<p>Tasks</p>
				<div className="show-chart">
					<p>Show</p>:
					<FormControl className={classes.formControl}>
						<Select
							value={age}
							onChange={handleChange}
							displayEmpty
							className={classes.selectEmpty}
							inputProps={{ 'aria-label': 'Without label' }}
						>
							<MenuItem value="">
								<span>This week</span>
							</MenuItem>
							<MenuItem value={10}>
								<span> This month</span>
							</MenuItem>
							<MenuItem value={20}>
								<span>This year</span>
							</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
			<ReactApexChart
				options={options.options}
				series={options.series}
				type="area"
				height={222}
				width={397}
			/>
		</div>
	);
};

export default DealsGraphic;
