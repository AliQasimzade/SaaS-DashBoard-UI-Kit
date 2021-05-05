import React from 'react';
import '../styles/Tasks.scss';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import {NavLink} from "react-router-dom";

const Tasks = () => {
	return (
		<main className="tasks">
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<NavLink to="/dashboard">Show more</NavLink>
		</main>
	);
};

export default Tasks;