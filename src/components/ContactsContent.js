import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/ContactsContent.scss';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector } from 'react-redux';
import EnhancedTableToolbar from './EnhancedTableToolbar';
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

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));
const createData = (
	name,
	email,
	companyName,
	role,
	forecast,
	recentActivity
) => {
	return { name, email, companyName, role, forecast, recentActivity };
};

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const headCells = [
	{ id: 'name', label: 'Name' },
	{ id: 'Email', label: 'Email' },
	{ id: 'Company name', label: 'Company name' },
	{ id: 'Role', label: 'Role' },
	{ id: 'Forecast', label: 'Forecast' },
	{ id: 'Recent activity', label: 'Recent activity' },
];

function EnhancedTableHead(props) {
	const handleAllSelectedList = (e) => {
     e.target.checked = true
	};
	return (
		
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox onClick={(e) =>handleAllSelectedList(e)}/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell key={headCell.id}>{headCell.label}</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

const useStyle = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	paper: {
		width: '100%',
	},
	table: {
		width: '100%',
	},
}));

const ContactsContent = () => {
	const data = useSelector((state) => state.productReducer);
	let [numSelected, setNumselected] = useState(-1);
	const handleSelectedList = (e, key) => {
		console.log(key);
		if (e.target.checked === true) {
			setNumselected(numSelected + 1);
		}else{
			setNumselected(numSelected - 1)
		}
	};
	const rows = [
		createData(
			[<img src={Lindsey} alt="" />, data.items.List1[0]],
			data.items.List1[1],
			data.items.List1[2],
			data.items.List1[3],
			data.items.List1[4],
			data.items.List1[5]
		),
		createData(
			[<img src={Nicci} alt="" />, data.items.List2[0]],
			data.items.List2[1],
			data.items.List2[2],
			data.items.List2[3],
			data.items.List2[4],
			data.items.List2[5]
		),
		createData(
			[<img src={George} alt="" />, data.items.List3[0]],
			data.items.List3[1],
			data.items.List3[2],
			data.items.List3[3],
			data.items.List3[4],
			data.items.List3[5]
		),
		createData(
			[<img src={Rebecca} alt="" />, data.items.List4[0]],
			data.items.List4[1],
			data.items.List4[2],
			data.items.List4[3],
			data.items.List4[4],
			data.items.List4[5]
		),
		createData(
			[<img src={Jane} alt="" />, data.items.List5[0]],
			data.items.List5[1],
			data.items.List5[2],
			data.items.List5[3],
			data.items.List5[4],
			data.items.List5[5]
		),
		createData(
			[<img src={Jones} alt="" />, data.items.List6[0]],
			data.items.List6[1],
			data.items.List6[2],
			data.items.List6[3],
			data.items.List6[4],
			data.items.List6[5]
		),
		createData(
			[<img src={Martin} alt="" />, data.items.List7[0]],
			data.items.List7[1],
			data.items.List7[2],
			data.items.List7[3],
			data.items.List7[4],
			data.items.List7[5]
		),
		createData(
			[<img src={Franz} alt="" />, data.items.List8[0]],
			data.items.List8[1],
			data.items.List8[2],
			data.items.List8[3],
			data.items.List8[4],
			data.items.List8[5]
		),
		createData(
			[<img src={John} alt="" />, data.items.List9[0]],
			data.items.List9[1],
			data.items.List9[2],
			data.items.List9[3],
			data.items.List9[4],
			data.items.List9[5]
		),
		createData(
			[<img src={Judith} alt="" />, data.items.List10[0]],
			data.items.List10[1],
			data.items.List10[2],
			data.items.List10[3],
			data.items.List10[4],
			data.items.List10[5]
		),
	];
	const classes = useStyles();
	const table = useStyle();
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
				<button>Add contact</button>
			</div>
			<div className="table">
				<div className={table.root}>
					<Paper className={table.paper}>
						<EnhancedTableToolbar numSelected={numSelected} />
						<TableContainer>
							<Table
								className={table.table}
								aria-labelledby="tableTitle"
								aria-label="enhanced table"
							>
								<EnhancedTableHead classes={table} rowCount={rows.length} />
								<TableBody>
									{stableSort(rows, getComparator()).map((row, key) => {
										return (
											<TableRow hover role="checkbox" tabIndex={-1} key={key}>
												<TableCell padding="checkbox">
													<Checkbox
													
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
