import React, { useState, useEffect } from 'react';
import useAuth from './useAuth';
import useTokenInterceptor from './useTokenInterceptor';
const useUpdateUser = () => {
	const { auth } = useAuth();
	const tokenInterceptor = useTokenInterceptor();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [updateDetails, setUpdateDetails] = useState({
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: ''
	});

	useEffect(() => {
		setUpdateDetails({
			firstName: auth.firstName,
			lastName: auth.lastName,
			username: auth.username,
			email: auth.email,
			password: ''
		});
	}, [auth]);

	useEffect(() => {
		setErrorMessage('');
	}, [updateDetails]);

	const update = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const endpoint = `/user/update/id/${auth.id}`;
			await tokenInterceptor.put(endpoint, JSON.stringify({ ...updateDetails }));
			setLoading(false);
			setSuccess(true);
			var userData = JSON.parse(localStorage.getItem('authUser'));
			localStorage.setItem(
				'authUser',
				JSON.stringify({
					...userData,
					firstName: updateDetails.firstName,
					lastName: updateDetails.lastName,
					username: updateDetails.username,
					email: updateDetails.email
				})
			);
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
	return { loading, success, errorMessage, updateDetails, setUpdateDetails, update };
};

export default useUpdateUser;
