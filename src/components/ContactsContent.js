import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/ContactsContent.scss';
import "../styles/media-queries/ContactsContent-Media.scss";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import EnhancedTableHead from './EnhancedTableHead';
import { useSelector } from 'react-redux';
import Lindsey from '../images/Lindsey.png';
import George from '../images/George.png';
import Nicci from '../images/Nicci.png';
import Rebecca from '../images/Rebecca.png';
import Jane from '../images/Jane.png';
import Jones from '../images/Jones.png';
import Martin from '../images/Martin.png';
import Judith from '../images/Judith.png';
import John from '../images/John.png';
import Franz from '../images/Franz.png';
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const ContactsContent = () => {
	const data = useSelector((state) => state.productReducer);
	const [selected, setSelected] = useState([]);
	const [age, setAge] = useState('');

	let [rows, setRows] = useState([
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
	]);
	const handleAddContact = () => {
		setRows([
			...rows,
			{
				name: ['Ali'],
				email: 'qasimzadeali4@gmail.com',
				companyName: 'ATL Tech',
				role: 'Front-End Developer',
				forecast: '80%',
				recentActivity: '5 minutes ago',
			},
		]);
	};

	const classes = useStyles();

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelecteds = rows.map((n) => n.email);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleDeleteAllClick = (event) => {
		document.querySelector('body thead').classList.remove('active');
		if (event.target.checked) {
			const newSelecteds = 0;
			setSelected(newSelecteds);

			return;
		}
		setSelected([]);
	};
	const handleClick = (event, email) => {
		const selectedIndex = selected.indexOf(email);

		let newSelected = [];
		if (selectedIndex <= -1) {
			document.querySelector('body thead').classList.add('active');
		} else if (selectedIndex === 0) {
			document.querySelector('body thead').classList.remove('active');
		}
		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, email);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}

		setSelected(newSelected);
	};
	const isSelected = (name) => selected.indexOf(name) !== -1;

	return (
		<div className="contacts-content">
			<div className="add-contact">
				<div className="company-select">
					<span>Company: </span>
					<FormControl
						className={classes.formControl}
						style={{ paddingLeft: '3px' }}
					>
						<Select
							value={age}
							onChange={handleChange}
							displayEmpty
							className={classes.selectEmpty}
							inputProps={{ 'aria-label': 'Without label' }}
						>
							<MenuItem value="">
								<span>All</span>
							</MenuItem>
							<MenuItem value={10}>
								<span>3</span>
							</MenuItem>
							<MenuItem value={20}>
								<span>6</span>
							</MenuItem>
						</Select>
					</FormControl>
				</div>
				<button onClick={handleAddContact}>Add contact</button>
			</div>
			<div className="table">
				<div className="table-wrapper">
					<Paper>
						<EnhancedTableToolbar
							numSelected={selected.length}
							onDeleteAllClick={handleDeleteAllClick}
						/>
						<TableContainer>
							<Table aria-labelledby="tableTitle" aria-label="enhanced table">
								<EnhancedTableHead onSelectAllClick={handleSelectAllClick} />
								<TableBody>
									{rows.map((row, key) => {
										const isItemSelected = isSelected(row.email);
										return (
											<TableRow
												hover
												role="checkbox"
												aria-checked={isItemSelected}
												key={row.email}
												selected={isItemSelected}
												onClick={(event) => handleClick(event, row.email)}
											>
												<TableCell padding="checkbox">
													<Checkbox
														className="check-list"
														checked={isItemSelected}
													/>
												</TableCell>
												<TableCell component="th" scope="row" padding="none">
													<div className="td">{row.name}</div>
												</TableCell>
												<TableCell>
													<div className="td">{row.email}</div>
												</TableCell>
												<TableCell>
													<div className="td">{row.companyName}</div>
												</TableCell>
												<TableCell>
													<div className="td">{row.role}</div>
												</TableCell>
												<TableCell>
													<div className="td">{row.forecast}</div>
												</TableCell>
												<TableCell>
													<div className="td">{row.recentActivity}</div>
												</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						</TableContainer>
					</Paper>
				</div>
			</div>
		</div>
	);
};
export default ContactsContent;
