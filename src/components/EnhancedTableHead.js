import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
const headCells = [
	{ id: 'name', label: 'Name' },
	{ id: 'Email', label: 'Email' },
	{ id: 'Company name', label: 'Company name' },
	{ id: 'Role', label: 'Role' },
	{ id: 'Forecast', label: 'Forecast' },
	{ id: 'Recent activity', label: 'Recent activity' },
];
const EnhancedTableHead = () => {
	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox />
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell key={headCell.id}>{headCell.label}</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default EnhancedTableHead;
