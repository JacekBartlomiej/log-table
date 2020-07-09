import React from 'react';
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import useStyles from './filters.styles';

const FiltersComponent = props => {
	const classes = useStyles();

	const { filters, setFilters, applyFilters, clearFilters } = props;

	const handleInputChange = name => event => {
		setFilters({ ...filters, [name]: event.target.value });
	};

	return (
		<div className={classes.root}>
			<Box display="flex" alignItems="center">
				<Box display="flex" flexDirection="column">
					<TextField
						id="date-from"
						label="Data od:"
						type="datetime-local"
						variant="outlined"
						margin="dense"
						onChange={handleInputChange('dateFrom')}
						value={filters.dateFrom || ''}
						inputProps={{ max: filters.dateTo || '' }}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						id="date-to"
						label="Data do:"
						type="datetime-local"
						variant="outlined"
						margin="dense"
						onChange={handleInputChange('dateTo')}
						value={filters.dateTo || ''}
						inputProps={{ min: filters.dateFrom || '' }}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Box>
				<Box display="flex" flexDirection="column">
					<TextField
						id="user"
						label="Użytkownik"
						variant="outlined"
						margin="dense"
						onChange={handleInputChange('user')}
						value={filters.user || ''}
					/>
					<FormControl variant="outlined" margin="dense">
						<InputLabel id="demo-simple-select-outlined-label">
							Status
						</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={filters.status}
							onChange={handleInputChange('status')}
							label="Status"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={'active'}>Active</MenuItem>
							<MenuItem value={'inactive'}>Inactive</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box display="flex" flexDirection="column">
					<Button variant="contained" color="primary" onClick={applyFilters}>
						Znajdź
					</Button>
					<Button variant="contained" color="primary" onClick={clearFilters}>
						Wyczyść filtry
					</Button>
				</Box>
			</Box>
		</div>
	);
};

export default FiltersComponent;
