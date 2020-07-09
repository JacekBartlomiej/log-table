import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiTextField-root, & .MuiFormControl-root, & .MuiButton-root': {
			margin: theme.spacing(1, 2),
			width: '25ch',
		}
	},
}));

export default useStyles;;