import React, { useState, useEffect } from 'react';
import useAuth from './useAuth';
import useTokenInterceptor from './useTokenInterceptor';
const useChangePassword = () => {
	const { auth } = useAuth();
	const tokenInterceptor = useTokenInterceptor();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [updateDetails, setUpdateDetails] = useState({
		oldPassword: '',
		newPassword: '',
		confirmNewPassword: ''
	});

	useEffect(() => {
		setErrorMessage('');
	}, [updateDetails]);

	const update = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const endpoint = `/user/changepassword/id/${auth.id}`;
			await tokenInterceptor.put(endpoint, JSON.stringify({ ...updateDetails }));
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
	return { loading, success, errorMessage, updateDetails, setUpdateDetails, update };
};

export default useChangePassword;
