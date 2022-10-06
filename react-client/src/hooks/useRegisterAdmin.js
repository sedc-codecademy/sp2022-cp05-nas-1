import { useState, useEffect } from 'react';
import useTokenInterceptor from './useTokenInterceptor';
const useRegisterAdmin = () => {
	const tokenInterceptor = useTokenInterceptor();
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

	const registerAdmin = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const endpoint = '/user/registeradmin';
			await tokenInterceptor.post(endpoint, JSON.stringify(registerDetails));
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
	return { loading, success, errorMessage, registerDetails, setRegisterDetails, registerAdmin };
};

export default useRegisterAdmin;
