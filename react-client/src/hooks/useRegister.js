import React, { useState, useEffect } from 'react';
import axios from '../api/axios.setup';
import useAuth from './useAuth';

const useRegister = () => {
	const { auth } = useAuth();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [registerDetails, setRegisterDetails] = useState({
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	useEffect(() => {
		setErrorMessage('');
	}, [registerDetails]);

	const register = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const endpoint = '/user/register';
			const config = {
				headers: {
					'Content-Type': 'application/json',
					withCredentials: true
				}
			};
			await axios.post(endpoint, JSON.stringify(registerDetails), config);
			setLoading(false);
			setSuccess(true);
		} catch (err) {
			setLoading(false);
			if (!err?.response?.status) {
				setErrorMessage('No server responce.');
			} else if (!err.response.data) {
				setErrorMessage('Something went wrong.');
			} else {
				setErrorMessage(err.response.data);
			}
		}
	};
	return { loading, success, errorMessage, registerDetails, setRegisterDetails, register };
};

export default useRegister;
