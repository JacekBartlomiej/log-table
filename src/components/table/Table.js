import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import useStyles from './table.styles';

const TableComponent = props => {
	const classes = useStyles();
	const { rows, setXmls, selected, setSelected } = props;

	const handleClick = (event, row) => {
        setSelected(row.mobileUserId);
        setXmls({ inputs: row.inputs, outputs: row.outputs });
	};

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Użytkownik</TableCell>
						<TableCell align="right">Domena</TableCell>
						<TableCell align="right">Start Time</TableCell>
						<TableCell align="right">End Time</TableCell>
						<TableCell align="right">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => {
						const isItemSelected = selected === row.mobileUserId;
						return (
							<TableRow
                                key={index}
								hover
								key={row.name}
								onClick={event => handleClick(event, row)}
								selected={isItemSelected}
							>
								<TableCell component="th" scope="row">
									{row.mobileUserId}
								</TableCell>
								<TableCell align="right">{row.mobileDomain}</TableCell>
								<TableCell align="right">{`${new Date(
									row.startTime * 1000
								).toLocaleString()}`}</TableCell>
								<TableCell align="right">{`${new Date(
									row.endTime * 1000
								).toLocaleString()}`}</TableCell>
								<TableCell align="right">{row.status}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableComponent;
