import React, { useEffect, useRef } from 'react';
import Form from '../../components/Form/Form';
import useLogin from '../../hooks/useLogin';
import FormControl from '../Form/FormControl/FormControl';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Notification from '../Notification/Notification';
function LoginForm() {
	const loginProviderRef = useRef();
	const { loading, success, errorMessage, loginDetails, setLoginDetails, authenticate } = useLogin();
	const handleChange = (e) => {
		setLoginDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleSubmit = (e) => {
		authenticate(e);
	};

	useEffect(() => {
		loginProviderRef?.current?.focus();
	}, []);

	if (loading) {
		return <LoadingSpinner />;
	}
	return (
		<Form submitFunction={handleSubmit}>
			{errorMessage && <Notification type='error' message={errorMessage}></Notification>}
			<FormControl>
				<label htmlFor='loginProvider'>Username or Email : </label>
				<input
					ref={loginProviderRef}
					id='loginProvider'
					type='text'
					name='loginProvider'
					value={loginDetails.loginProvider}
					autoComplete='none'
					onChange={handleChange}
					placeholder='Username or Email'
				></input>
			</FormControl>
			<FormControl>
				<label htmlFor='password'>Password : </label>
				<input
					id='password'
					type='password'
					name='password'
					value={loginDetails.password}
					autoComplete='none'
					onChange={handleChange}
					placeholder='password'
				></input>
			</FormControl>
			<button type='submit'>Login</button>
		</Form>
	);
}

export default LoginForm;
