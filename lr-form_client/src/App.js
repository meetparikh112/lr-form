import './App.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import ContactForm from './components/ContactForm';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		whiteSpace: 'nowrap',
		marginBottom: theme.spacing(1),
	},
	paperForm: {
		padding: theme.spacing(1),
		// textAlign: 'center',
		color: theme.palette.text.secondary,
		whiteSpace: 'nowrap',
		marginBottom: theme.spacing(1),
		backgroundColor: 'rgba(235, 250, 255, 0.7)',
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

function App() {
	const classes = useStyles();

	return (
		<div className='App'>
			<React.Fragment>
				<CssBaseline />
				<AppBar position='relative'>
					<Toolbar>
						<CameraIcon className={classes.icon} />
						<Typography variant='h6' color='inherit' noWrap>
							ABCDEF
						</Typography>
					</Toolbar>
				</AppBar>
				<main>
					<Container className={classes.cardGrid}>
						<Grid container spacing={3}>
							<Grid item xs={4}>
								<Paper className={classes.paper}>xs=4</Paper>
							</Grid>
							<Grid item xs={8}>
								<div className={classes.paperForm}>
									
									<ContactForm />
								</div>
							</Grid>
						</Grid>
					</Container>
				</main>
				{/* Footer */}
				<footer className={classes.footer}>
					<Typography variant='h6' align='center' gutterBottom>
						Footer
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'
						color='textSecondary'
						component='p'
					>
						Something here to give the footer a purpose!
					</Typography>
					<Copyright />
				</footer>
				{/* End footer */}
			</React.Fragment>
		</div>
	);
}

export default App;
