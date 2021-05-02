import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/ContactsContent.scss';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import deleteIcon from "../images/delete-icon.png";
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

const rows = [
	createData([<img src={deleteIcon} alt="" />,'Ali'], 305, 3.7, 67, 4.3, 2),
	createData('Donut', 452, 25.0, 51, 4.9, 2),
	createData('Eclair', 262, 16.0, 24, 6.0, 2),
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 2),
	createData('Gingerbread', 356, 16.0, 49, 3.9, 2),
	createData('Honeycomb', 408, 3.2, 87, 6.5, 2),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 2),
	createData('Jelly Bean', 375, 0.0, 94, 0.0, 2),
	createData('KitKat', 518, 26.0, 65, 7.0, 2),
	createData('Lollipop', 392, 0.2, 98, 0.0, 2),
];

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
	const { onSelectAllClick } = props;
	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						onChange={onSelectAllClick}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell key={headCell.id}>{headCell.label}</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	classes: PropTypes.object.isRequired,
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired,
};


const EnhancedTableToolbar = (props) => {
	const { numSelected } = props;

	return (
		<Toolbar>
			{numSelected > 0 ? (
				<Typography
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div
						style={{
							width: '16px',
							height: '16px',
							borderRadius: '4px',
							background: '#109CF1',
							color: '#fff',
							fontSize: '10px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							margin: '0 24px 0 14px',
						}}
					>
						{numSelected}
					</div>
					<p style={{ marginRight: '16px' }}>{numSelected} selected</p>
				</Typography>
			) : (
				''
			)}

			{numSelected > 0 ? (
				<Tooltip title="Delete">
					<IconButton aria-label="delete">
						<img src={deleteIcon} alt="deleteIcon" />
					</IconButton>
				</Tooltip>
			) : (
				''
			)}
		</Toolbar>
	);
};

EnhancedTableToolbar.propTypes = {
	numSelected: PropTypes.number.isRequired,
};

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
						<EnhancedTableToolbar  />
						<TableContainer>
							<Table
								className={table.table}
								aria-labelledby="tableTitle"
								aria-label="enhanced table"
							>
								<EnhancedTableHead
									classes={table}	
									rowCount={rows.length}
								/>
								<TableBody>
									{stableSort(rows, getComparator()).map(
										(row, index) => {
											
											const labelId = `enhanced-table-checkbox-${index}`;
											return (
												<TableRow
													hover
													role="checkbox"
													tabIndex={-1}
													key={row.name}
													
												>
													<TableCell padding="checkbox">
														<Checkbox
															
															inputProps={{ 'aria-labelledby': labelId }}
														/>
													</TableCell>
													<TableCell
														component="th"
														id={labelId}
														scope="row"
														padding="none"
													>
														{row.name}
													</TableCell>
													<TableCell>{row.email}</TableCell>
													<TableCell>{row.companyName}</TableCell>
													<TableCell>{row.role}</TableCell>
													<TableCell>{row.forecast}</TableCell>
													<TableCell>{row.recentActivity}</TableCell>
												</TableRow>
											);
										}
									)}
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