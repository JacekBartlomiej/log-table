import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const XmlsComponent = props => {
	const { xmls } = props;

	return (
		<Box display="flex">
			<Box m={1}>
				<Card>
					<CardContent>
						<Typography variant="h5" component="h2">
							Inputs Xml
						</Typography>
						<Typography color="textSecondary">{xmls.inputs}</Typography>
					</CardContent>
				</Card>
			</Box>
			<Box m={1}>
				<Card>
					<CardContent>
						<Typography variant="h5" component="h2">
							Outputs Xml
						</Typography>
						<Typography color="textSecondary">{xmls.outputs}</Typography>
					</CardContent>
				</Card>
			</Box>
		</Box>
	);
};

export default XmlsComponent;

