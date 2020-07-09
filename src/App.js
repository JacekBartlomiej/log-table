import React from 'react';
import './App.css';
import FiltersComponent from './components/filters/Filters';
import TableComponent from './components/table/Table';
import XmlsComponent from './components/xml/Xml';
import { mockData as initialData } from './mockData';
import Box from '@material-ui/core/Box';

function App() {
	const initialFilters = {
		dateFrom: '',
		dateTo: '',
		user: '',
		status: '',
	};
	const [filters, setFilters] = React.useState(initialFilters);
	const [data, setData] = React.useState(initialData);
	const initialXmls = { inputs: '', outputs: '' };
	const [xmls, setXmls] = React.useState(initialXmls);
	const [selected, setSelected] = React.useState(null);
	const applyFilters = () => {
		const { user, status, dateFrom, dateTo } = filters;
		let filteredData = JSON.parse(JSON.stringify(initialData));
		if (user) {
			filteredData = filterByUser(filteredData, user);
		}
		if (dateFrom) {
			filteredData = filterByDateFrom(filteredData, dateFrom);
		}
		if (dateTo) {
			filteredData = filterByDateTo(filteredData, dateTo);
		}
		if (status) {
			console.log(status);
			filteredData = filterByStatus(filteredData, status);
		}
		setData(filteredData);
		setSelected(null);
		setXmls(initialXmls);
	};

	const clearFilters = () => {
		setFilters(initialFilters);
		setData(initialData);
		setSelected(null);
		setXmls(initialXmls);
	}

	return (
		<Box m={4}>
			<Box mb={2}>
				<FiltersComponent
					filters={filters}
					setFilters={setFilters}
					applyFilters={applyFilters}
					clearFilters={clearFilters}
				></FiltersComponent>
			</Box>
			<Box mb={2}>
				<TableComponent
					rows={data}
					setXmls={setXmls}
					selected={selected}
					setSelected={setSelected}
				></TableComponent>
			</Box>
			<Box mb={2}>
				{selected && <XmlsComponent xmls={xmls}></XmlsComponent>}
			</Box>
		</Box>
	);
}

export default App;

function filterByUser(data, user) {
	return data.filter(item =>
		item.mobileUserId.toLowerCase().includes(user.toLowerCase())
	);
}

function filterByStatus(data, status) {
	return data.filter(item =>
		item.status === status);
}

function filterByDateFrom(data, date) {
	return data.filter(item => new Date(date) < new Date(item.startTime * 1000));
}

function filterByDateTo(data, date) {
	return data.filter(item => new Date(date) > new Date(item.endDate * 1000));
}
