import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import './styles/TasksInfo.scss';
import WeekDays from "./WeekDays";

const BorderLinearProgress = withStyles((theme) => ({
	root: {
		height: 4,
		borderRadius: 10,
	},
	colorPrimary: {
		backgroundColor:
			theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
	},
	bar: {
		borderRadius: 10,
		backgroundColor: '#2ED47A',
	},
}))(LinearProgress);

const useStyle = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const TasksInfo = () => {
	const classes = useStyle();
	const [option, setOption] = useState('');

	const handleChange = (event) => {
		setOption(event.target.value);
	};
	return (
		<section className="section-1">
			<div className="section-one">
				<div className="section-one-header">
					<p className="remaining-tasks">8 task completed out of 10</p>
					<div className="show-tasks">
						<span className="show">Show:</span>
						<FormControl
							className={classes.formControl}
							style={{ paddingLeft: '3px' }}
						>
							<Select
								value={option}
								onChange={handleChange}
								displayEmpty
								className={classes.selectEmpty}
								inputProps={{ 'aria-label': 'Without label' }}
							>
								<MenuItem value="">
									<span>This week</span>
								</MenuItem>
								<MenuItem value={1}>
									<span> This month</span>
								</MenuItem>
								<MenuItem value={2}>
									<span>This year</span>
								</MenuItem>
							</Select>
						</FormControl>
					</div>
				</div>
				<div className={classes.root}>
					<BorderLinearProgress variant="determinate" value={86} />
				</div>
				<div className="date">23 December, Sunday</div>
				<WeekDays />
			</div>
		</section>
	);
};

export default TasksInfo;