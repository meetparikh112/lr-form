import React from 'react';
// import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
	Button,
	Container,
	Grid,
	makeStyles,
	Slider,
	TextField,
	Typography,
	Checkbox,
	FormControlLabel,
} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	space: {
		margin: theme.spacing(2),
	},
	container: {
		// overflow: 'break',
	},
}));

function rangeText(value) {
	return `${value}`;
}

function ContactForm() {
	const classes = useStyles();

	const [valueRange, setvalueRange] = React.useState([21, 60]);
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [phone_no, setPhone_no] = React.useState('');
	const [company_website, setCompany_website] = React.useState('');
	const [
		companys_biggest_challange,
		setCompanys_biggest_challange,
	] = React.useState('');
	const [
		project_brif_introduction,
		setProject_brif_introduction,
	] = React.useState('');
	const [scheduled_call, setScheduled_call] = React.useState('');
	const [project_brif_filepath, setProject_brif_filepath] = React.useState('');

	const handleChangeRange = (event, valueRange) => {
		setvalueRange(valueRange);
	};

	const SubmitForm = (e) => {
		e.preventDefault();

		var data = new Object();
		data['name'] = name;
		data['email'] = email;
		data['phone_no'] = phone_no;
		data['company_website'] = company_website;
		data['companys_biggest_challange'] = companys_biggest_challange;
		data['project_brif_introduction'] = project_brif_introduction;
		data['scheduled_call'] = 'scheduled_call';
		data['min_budget'] = valueRange[0];
		data['max_budget'] = valueRange[1];
		data['project_brif_filepath'] = project_brif_filepath;
		axios
			.post('http://localhost:8000/api/contact-form-submit', data)
			.then((response) => {
				if (response.data.status === 200) {
					alert('success ');
				}
				if (response.data.status === 'failed') {
					alert(JSON.stringify(response.data));
				}
			});
	};

	return (
		<Container className={classes.container}>
			<h2>
				Get in touch to discuss your project, request a quote or even just to
				pick our brains.
			</h2>
			<h3>1. Tell us about your company</h3>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						required
						fullWidth
						label='Your Name'
						name='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						variant='outlined'
						required
						fullWidth
						label='Your Email'
						name='email'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						variant='outlined'
						fullWidth
						label='Your Phone Number'
						name='phone_no'
						value={phone_no}
						onChange={(e) => setPhone_no(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						fullWidth
						name='company_website'
						label='Company Website'
						type='text'
						value={company_website}
						onChange={(e) => setCompany_website(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						fullWidth
						name='companys_biggest_challange'
						label='What`s Your Company`s Biggest Challange Today?'
						type='text'
						value={companys_biggest_challange}
						onChange={(e) => setCompanys_biggest_challange(e.target.value)}
					/>
				</Grid>
			</Grid>
			<h3>2. What are you looking to work on?</h3>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						fullWidth
						multiline
						rowsMax={4}
						required
						label='Describe Your Project Briefly'
						name='project_brif_introduction'
						value={project_brif_introduction}
						onChange={(e) => setProject_brif_introduction(e.target.value)}
					/>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography id='range-slider' gutterBottom>
						What’s your budget?
					</Typography>
					<Slider
						value={valueRange}
						onChange={handleChangeRange}
						valueLabelDisplay='auto'
						aria-labelledby='range-slider'
						getAriaValueText={rangeText}
					/>
				</Grid>
			</Grid>
			<h3>3. What services are you interested in?</h3>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<FormControlLabel
						value='1'
						control={<Checkbox color='primary' />}
						label='Web or Mobile Apps Development'
						labelPlacement='Web or Mobile Apps Development'
					/>
					<FormControlLabel
						value='2'
						control={<Checkbox color='primary' />}
						label='Hire Dedicated Developers'
						labelPlacement='Hire Dedicated Developers'
					/>
					<FormControlLabel
						value='3'
						control={<Checkbox color='primary' />}
						label='AI/ML Development Services'
						labelPlacement='AI/ML Development Services'
					/>
					<FormControlLabel
						value='4'
						control={<Checkbox color='primary' />}
						label='Custom Software Development'
						labelPlacement='Custom Software Development'
					/>
					<FormControlLabel
						value='5'
						control={<Checkbox color='primary' />}
						label='Software Testing and QA'
						labelPlacement='Software Testing and QA'
					/>
					<FormControlLabel
						value='6'
						control={<Checkbox color='primary' />}
						label='API Development Integration'
						labelPlacement='API Development Integration'
					/>
				</Grid>
			</Grid>
			<h2>
				4. Schedule a call with our tech expert. Get a detailed tech
				consultation for free!
			</h2>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						id='datetime-local'
						label='Next appointment'
						type='datetime-local'
						name='scheduled_call'
						defaultValue='2017-05-24T10:30'
						// className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
						// value={scheduled_call}
						// onChange={(e) => setScheduled_call(e.target.value)}
					/>
				</Grid>
			</Grid>

			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Button variant='outlined' color='secondary' onClick={SubmitForm}>
						Submit
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
}

export default ContactForm;
