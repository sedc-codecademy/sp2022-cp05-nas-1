import React from 'react';

import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import Notification from '../../../components/Notification/Notification';
import ChangePasswordForm from '../../../components/ChangePasswordForm/ChangePasswordForm';
import useChangePassword from '../../../hooks/useChangePassword';

function ChangePassword() {
	const { loading, success, errorMessage, updateDetails, setUpdateDetails, update } = useChangePassword();
	if (loading) {
		return <LoadingSpinner />;
	}
	return (
		<>
			{success && <Notification type='success' message='Password changed successfully' />}
			{errorMessage && <Notification type='error' message={errorMessage} />}
			<h1>ChangePassword</h1>
			<ChangePasswordForm updateDetails={updateDetails} setUpdateDetails={setUpdateDetails} update={update} />
		</>
	);
}

export default ChangePassword;
