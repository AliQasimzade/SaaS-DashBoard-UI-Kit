import React from 'react';
import Navigation from './Navigation';
import ContactsContent from './ContactsContent';
import '../styles/Contacts.scss';
import { useSelector } from 'react-redux';

import Lindsey from '../images/associated_photo (2).png';
import Rebecca from '../images/associated_photo (1).png';
import George from '../images/associated_photo.png';
import Nicci from '../images/Nicci.png';
import Jane from '../images/Jane.png';
import Franz from '../images/Franz.png';
import Martin from '../images/Martin.png';
import Jones from '../images/Jones.png';
import Judith from '../images/Judith.png';
import John from '../images/John.png';
const Contacts = () => {
	const data = useSelector((state) => state.productReducer);
	const rows = [
		{
			name: [<img src={Lindsey} alt="" />, data.items.List1[0]],
			email: data.items.List1[1],
			companyName: data.items.List1[2],
			role: data.items.List1[3],
			forecast: data.items.List1[4],
			recentActivity: data.items.List1[5],
		},
		{
			name: [<img src={Nicci} alt="" />, data.items.List2[0]],
			email: data.items.List2[1],
			companyName: data.items.List2[2],
			role: data.items.List2[3],
			forecast: data.items.List2[4],
			recentActivity: data.items.List2[5],
		},
		{
			name: [<img src={George} alt="" />, data.items.List3[0]],
			email: data.items.List3[1],
			companyName: data.items.List3[2],
			role: data.items.List3[3],
			forecast: data.items.List3[4],
			recentActivity: data.items.List3[5],
		},
		{
			name: [<img src={Rebecca} alt="" />, data.items.List4[0]],
			email: data.items.List4[1],
			companyName: data.items.List4[2],
			role: data.items.List4[3],
			forecast: data.items.List4[4],
			recentActivity: data.items.List4[5],
		},
		{
			name: [<img src={Jane} alt="" />, data.items.List5[0]],
			email: data.items.List5[1],
			companyName: data.items.List5[2],
			role: data.items.List5[3],
			forecast: data.items.List5[4],
			recentActivity: data.items.List5[5],
		},
		{
			name: [<img src={Jones} alt="" />, data.items.List6[0]],
			email: data.items.List6[1],
			companyName: data.items.List6[2],
			role: data.items.List6[3],
			forecast: data.items.List6[4],
			recentActivity: data.items.List6[5],
		},
		{
			name: [<img src={Martin} alt="" />, data.items.List7[0]],
			email: data.items.List7[1],
			companyName: data.items.List7[2],
			role: data.items.List7[3],
			forecast: data.items.List7[4],
			recentActivity: data.items.List7[5],
		},
		{
			name: [<img src={Franz} alt="" />, data.items.List8[0]],
			email: data.items.List8[1],
			companyName: data.items.List8[2],
			role: data.items.List8[3],
			forecast: data.items.List8[4],
			recentActivity: data.items.List8[5],
		},
		{
			name: [<img src={John} alt="" />, data.items.List9[0]],
			email: data.items.List9[1],
			companyName: data.items.List9[2],
			role: data.items.List9[3],
			forecast: data.items.List9[4],
			recentActivity: data.items.List9[5],
		},
		{
			name: [<img src={Judith} alt="" />, data.items.List10[0]],
			email: data.items.List10[1],
			companyName: data.items.List10[2],
			role: data.items.List10[3],
			forecast: data.items.List10[4],
			recentActivity: data.items.List10[5],
		},
	];
	return (
		<div className="contacts">
			<Navigation />
			<ContactsContent rows={rows}/>
		</div>
	);
};

export default Contacts;
