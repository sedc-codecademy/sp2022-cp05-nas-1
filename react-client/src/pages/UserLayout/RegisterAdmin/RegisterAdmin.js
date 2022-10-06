import React from 'react';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import Notification from '../../../components/Notification/Notification';
import RegisterForm from '../../../components/RegisterForm/RegisterForm';
import useRegisterAdmin from '../../../hooks/useRegisterAdmin';
function RegisterAdmin() {
	const { loading, success, errorMessage, registerDetails, setRegisterDetails, registerAdmin } = useRegisterAdmin();

	if (loading) {
		return <LoadingSpinner />;
	}
	return (
		<>
			{success && <Notification type='success' message='Admin registered successfully' />}
			{errorMessage && <Notification type='error' message={errorMessage} />}
			<h1>RegisterAdmin</h1>
			<RegisterForm
				registerDetails={registerDetails}
				setRegisterDetails={setRegisterDetails}
				register={registerAdmin}
			/>
		</>
	);
}

export default RegisterAdmin;
