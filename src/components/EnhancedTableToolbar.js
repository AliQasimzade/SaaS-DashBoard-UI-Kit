import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import deleteIcon from '../images/delete-icon.png';
const EnhancedTableToolbar = (props) => {
	let { numSelected } = props;
	const handleDeleteList = () => {
	
	};
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
					<IconButton aria-label="delete" onClick={handleDeleteList}>
						<img src={deleteIcon} alt="deleteIcon" />
					</IconButton>
				</Tooltip>
			) : (
				''
			)}
		</Toolbar>
	);
};
export default EnhancedTableToolbar;
