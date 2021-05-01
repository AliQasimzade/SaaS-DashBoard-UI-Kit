import React, { useState } from 'react';
import '../styles/Tasks.scss';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import associatedImage from '../images/associated_photo.png';
import associatedImage1 from '../images/associated_photo (1).png';
import associatedImage2 from '../images/associated_photo (2).png';
import Ellipse from '../images/Ellipse.png';
import Ellipse1 from '../images/Ellipse (1).png';
import Edit from '../images/edit.png';
import Delete from '../images/delete.png';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

const Tasks = () => {
	const classe = useStyle();
	const [age, setAge] = useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<main className="tasks">
			<section className="section-1">
				<div className="section-one">
					<div className="section-one-header">
						<p className="remaining-tasks">8 task completed out of 10</p>
						<div className="show-tasks">
							<span className="show">Show:</span>
							<FormControl className={classe.formControl} style={{paddingLeft:'3px'}}>
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
			<section>
				<div className="section-two">
					<div className="section-two-header">
						<p>Send benefit review by Sunday</p>
						<span>Reminder</span>
					</div>
					<div className="due-date">
						<span>Due date:</span>
						<p>December 23, 2018</p>
					</div>
					<div className="completed">
						<div className="person">
							<img src={associatedImage} alt="associated_image" />
							<p>George Fields</p>
						</div>
						<button>Completed</button>
					</div>
				</div>
			</section>
			<section>
				<div className="section-three">
					<div className="section-three-header">
						<p>Invite to office meet-up</p>
						<span>Call</span>
					</div>
					<div className="due-date">
						<span>Due date : </span>
						<p>December 23, 2018</p>
					</div>
					<div className="ended">
						<div className="person">
							<img src={associatedImage1} alt="" />
							<p>Rebecca Moore</p>
						</div>
						<div className="edit-delete-person">
							<div className="edit-delete-icons">
								<img src={Ellipse} alt="ellipse" />
								<img src={Ellipse1} alt="ellipse1" />
								<img src={Edit} alt="edit" title="edit" />
								<img src={Delete} alt="delete" title="delete" />
							</div>
							<button>Ended</button>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="section-four">
					<div className="section-four-header">
						<p>Office meet-up</p>
						<span>Event</span>
					</div>
					<div className="due-date">
						<span>Due date : </span>
						<p>December 23, 2018</p>
					</div>
					<div className="completed">
						<div className="person">
							<img src={associatedImage2} alt="" />
							<p>Lindsey Stroud</p>
						</div>
						<button>Completed</button>
					</div>
				</div>
			</section>
			<a href="/">Show more</a>
		</main>
	);
};

export default Tasks;