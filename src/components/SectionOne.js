import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import '../styles/SectionOne.scss';

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

const SectionOne = () => {
	const classe = useStyle();
	const [age, setAge] = useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<section className="section-1">
			<div className="section-one">
				<div className="section-one-header">
					<p className="remaining-tasks">8 task completed out of 10</p>
					<div className="show-tasks">
						<span className="show">Show:</span>
						<FormControl
							className={classe.formControl}
							style={{ paddingLeft: '3px' }}
						>
							<Select
								value={age}
								onChange={handleChange}
								displayEmpty
								className={classe.selectEmpty}
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
				<div className={classe.root}>
					<BorderLinearProgress variant="determinate" value={86} />
				</div>
				<div className="date">23 December, Sunday</div>
				<div className="week-days">
					<div className="sunday">
						<p className="short-day-name">Sun</p>
						<p className="day day-1">23</p>
					</div>
					<div className="monday">
						<p className="short-day-name">Mon</p>
						<p className="day">24</p>
					</div>
					<div className="tuesday">
						<p className="short-day-name">Tue</p>
						<p className="day">25</p>
					</div>
					<div className="wednesday">
						<p className="short-day-name">Wed</p>
						<p className="day">26</p>
					</div>
					<div className="thursday">
						<p className="short-day-name">Thu</p>
						<p className="day">27</p>
					</div>
					<div className="friday">
						<p className="short-day-name">Fri</p>
						<p className="day">28</p>
					</div>
					<div className="saturday">
						<p className="short-day-name">Sat</p>
						<p className="day">29</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionOne;