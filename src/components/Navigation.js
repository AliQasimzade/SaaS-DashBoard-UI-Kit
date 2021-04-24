import React from 'react';
import '../styles/Navigation.scss';
import NotificationButton from "../images/notifications.png";
import SearchButton from "../images/search-button.png";

const Navigation = () => {
	return (
		<div className="navigation">
			<div className="search">
				<button className="search-button">
					<img src={SearchButton} alt="search-button" />
				</button>
				<input type="text" placeholder="Global search" />
			</div>
			<button className="notification-button">
				<img src={NotificationButton} alt="notification-button" />
			</button>
		</div>
	);
};

export default Navigation;
