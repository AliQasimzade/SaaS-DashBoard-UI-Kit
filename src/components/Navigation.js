import React, { useState } from 'react';
import '../styles/Navigation.scss';
import NotificationButton from '../images/notifications.png';
import SearchButton from '../images/search-button.png';

import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const Navigation = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const isMenuOpen = Boolean(anchorEl);
	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>News: 17</MenuItem>
			<MenuItem onClick={handleMenuClose}>Completed: 29</MenuItem>
		</Menu>
	);

	return (
		<div className="navigation">
			<div className="search">
				<button className="search-button">
					<img src={SearchButton} alt="search-button" />
				</button>
				<input type="text" placeholder="Global search" />
			</div>
			<IconButton onClick={handleProfileMenuOpen}>
				<img src={NotificationButton} alt="notification-button" />
			</IconButton>
			{renderMenu}
		</div>
	);
};

export default Navigation;
