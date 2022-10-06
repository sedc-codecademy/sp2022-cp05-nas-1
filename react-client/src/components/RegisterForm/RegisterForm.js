import React from 'react';
import { Link } from 'react-router-dom';
import useRegister from '../../hooks/useRegister';
import Form from '../Form/Form';
import FormControl from '../Form/FormControl/FormControl';
import Notification from '../Notification/Notification';

function RegisterForm({ registerDetails, setRegisterDetails, register }) {
	const { firstName, lastName, username, email, password, confirmPassword } = registerDetails;

	const handleChange = (e) => {
		setRegisterDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<Form autoComplete='none' submitFunction={register}>
			<FormControl>
				<label htmlFor='firstName'>First name: </label>
				<input
					id='firstName'
					type='text'
					name='firstName'
					value={firstName}
					autoComplete='none'
					placeholder='Jon'
					onChange={handleChange}
					required
				/>
			</FormControl>
			<FormControl>
				<label htmlFor='lastName'>Last name: </label>
				<input
					id='lastName'
					type='text'
					name='lastName'
					value={lastName}
					autoComplete='none'
					placeholder='Doe'
					onChange={handleChange}
					required
				/>
			</FormControl>
			<FormControl>
				<label htmlFor='username'>Username: </label>
				<input
					id='username'
					type='text'
					name='username'
					value={username}
					autoComplete='none'
					placeholder='JonDoe'
					onChange={handleChange}
					required
				/>
			</FormControl>
			<FormControl>
				<label htmlFor='email'>Email: </label>
				<input
					id='email'
					type='email'
					name='email'
					value={email}
					autoComplete='none'
					placeholder='jon.doe@email.com'
					onChange={handleChange}
					required
				/>
			</FormControl>
			<FormControl>
				<label htmlFor='password'>Password: </label>
				<input
					id='password'
					type='password'
					name='password'
					value={password}
					autoComplete='none'
					placeholder='password123'
					onChange={handleChange}
					required
				/>
			</FormControl>
			<FormControl>
				<label htmlFor='confirmPassword'>Confirm password: </label>
				<input
					id='confirmPassword'
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					autoComplete='none'
					placeholder='password123'
					onChange={handleChange}
					required
				/>
			</FormControl>

			<button type='submit'>Register</button>
		</Form>
	);
}

export default RegisterForm;
