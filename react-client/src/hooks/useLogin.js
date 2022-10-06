import React, { useState, useEffect } from 'react';
import axios from '../api/axios.setup';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';

const useLogin = () => {
	const { setAuth } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.pathname || '/';
	const [loginDetails, setLoginDetails] = useState({
		loginProvider: '',
		password: ''
	});
	const [errorMessage, setErrorMessage] = useState(false);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		setErrorMessage('');
	}, [loginDetails]);

	const authenticate = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const endpoint = '/user/authenticate';
			const config = {
				headers: {
					'Content-Type': 'application/json',
					withCredentials: true
				}
			};
			const res = await axios.post(endpoint, JSON.stringify(loginDetails), config);
			localStorage.setItem(
				'authUser',
				JSON.stringify({ ...res.data, expirationDate: new Date().setDate(new Date().getDate() + 2) })
			);
			setAuth({ ...res.data });
			setLoading(false);
			setSuccess(true);
			navigate(from, { replace: true });
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

	return { loading, success, errorMessage, loginDetails, setLoginDetails, authenticate };
};

export default useLogin;
