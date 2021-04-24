import React from 'react';
import "../styles/Tasks.scss";
import { ProgressBar, Form} from 'react-bootstrap';

const Tasks = () => {
	return (
		<main className="tasks">
			<section className="section-1">
				<div className="section-one">
					<div className="section-one-header">
						<p className="remaining-tasks">8 task completed out of 10</p>
						<div className="show-tasks">
							<span>Show:</span>
								<Form.Control size="sm" as="select" style={{border:'none'}}>
									<option>This week</option>
									<option>This month</option>
									<option>This year</option>
								</Form.Control>
						</div>
					</div>
					<ProgressBar variant="success" now={82} className="progress-bar" />
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
			<section></section>
			<section></section>
			<section></section>
		</main>
	);
};

export default Tasks;
