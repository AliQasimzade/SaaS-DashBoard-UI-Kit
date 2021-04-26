import React, { useRef } from 'react';
import '../styles/SideBar.scss';
import Profile from '../images/profile.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeList } from '../redux/actions/actions';
import dashboardImage from '../images/list-1.svg';
import tasksImage from '../images/list-2.svg';
import emailImage from '../images/email.svg';
import contactsImage from '../images/contacts.svg';
import chatImage from '../images/chat.svg';
import dealsImage from '../images/deals.svg';
import settingsImage from '../images/settings.svg';
import profileImage from '../images/profile.png';

const SideBar = () => {
	const dispatch = useDispatch();
	const listKey = useSelector((state) => state.changeListReducer);
	const myRef = useRef(null);

	const allList = [
		{
			image: dashboardImage,
			img: profileImage,
			list: 'Dashboard',
		},
		{
			image: tasksImage,
			img: profileImage,
			list: 'Tasks',
		},
		{
			image: emailImage,
			img: profileImage,
			list: 'Email',
		},
		{
			image: contactsImage,
			img: profileImage,
			list: 'Contacts',
		},
		{
			image: chatImage,
			img: profileImage,
			list: 'Chat',
		},
		{
			image: dealsImage,
			img: profileImage,
			list: 'Deals',
		},
		{
			image: settingsImage,
			img: profileImage,
			list: 'Settings',
		},
	];

	const handleClickList = (key) => {
		dispatch(changeList(key));
		document.getElementsByClassName('disable-image')[key].style.display =
			'block';
		document.getElementsByClassName('able-image')[key].style.display = 'none';
	};
	const handleToggleSideBar = () => {
		myRef.current.classList.toggle('active');
	};

	return (
		<div className="side-bar" ref={myRef}>
			<div className="heading">
				<p>
					SaaS <span className="kit">Kit</span>
				</p>
			</div>
			<div className="profile">
				<div className="profile-image">
					<img src={Profile} alt="profile_image" />
				</div>
				<div className="profile-info">
					<p className="name">Sierra Ferguson</p>
					<p className="gmail">s.ferguson@gmail.com</p>
				</div>
			</div>
			<ul className="side-lists">
				{allList.map((item, key) => (
					<li key={key} className={key === 6 ? 'settings' : ''}>
						<div className="list-images" key={key}>
							<img src={item.image} alt="" key={key} className="able-image" />
							<img
								src={item.img}
								alt=""
								key={key}
								style={{ display: 'none' }}
								className="disable-image"
							/>
						</div>
						<a
							key={key}
							href={key === 0 ? '/dashboard' : '/'}
							style={key === listKey.key ? { color: '#109CF1' } : {}}
							onClick={(e) => handleClickList(e, key)}
						>
							{item.list}
						</a>
					</li>
				))}
			</ul>
			<div className="toggle-side-bar" onClick={handleToggleSideBar}>
				<svg
					width="14"
					height="14"
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V2C14 0.895431 13.1046 0 12 0H2ZM5 2C4.44772 2 4 2.44772 4 3V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11V3C6 2.44772 5.55228 2 5 2Z"
						fill="#C2CFE0"
					/>
				</svg>
				<p>Toggle sidebar</p>
			</div>
		</div>
	);
};

export default SideBar;
