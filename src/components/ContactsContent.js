import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/ContactsContent.scss';
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
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const ContactsContent = (props) => {
	useEffect(() => {
		console.log(props);
	});

	let [numSelected, setNumselected] = useState(0);
	const handleSelectedList = (e) => {
		if (e.target.checked === true) {
			setNumselected(numSelected + 1);
			console.log(numSelected);
		} else {
			setNumselected((numSelected -= 1));
		}
	};
	const handleAddContact = () => {
		props.rows.push({
			name: ['Ali', 'Qasimzade'],
			email: 'qasimzade',
			companyName: 'ATL Tech',
			role: 'Front-End Developer',
			forecast: '80%',
			recentActivity: '5 minutes ago',
		});
		console.log(props.rows);
	};

	const classes = useStyles();
	const handleChange = (event) => {
		setAge(event.target.value);
	};
	const [age, setAge] = useState('');

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
				<div>
					<Paper>
						<EnhancedTableToolbar numSelected={numSelected} />
						<TableContainer>
							<Table aria-labelledby="tableTitle" aria-label="enhanced table">
								<EnhancedTableHead />
								<TableBody>
									{props.rows.map((row, key) => (
										<TableRow hover role="checkbox" key={key}>
											<TableCell padding="checkbox">
												<Checkbox
													className="check-list"
													value={numSelected}
													onClick={(e) => handleSelectedList(e)}
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
									))}
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