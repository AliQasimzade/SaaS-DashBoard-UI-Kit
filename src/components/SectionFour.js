import React from 'react';
import associatedImage2 from '../images/Rebecca.png';
import '../styles/SectionFour.scss';

const SectionFour = () => {
	return (
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
	);
};

export default SectionFour;
