import React from 'react';
import Notification from '../../../components/Notification/Notification';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import UpdateUserForm from '../../../components/UpdateUserForm/UpdateUserForm';
import useUpdateUser from '../../../hooks/useUpdateUser';

function UpdateUser() {
	const { loading, success, errorMessage, updateDetails, setUpdateDetails, update } = useUpdateUser();

	if (loading) {
		return <LoadingSpinner />;
	}

	return (
		<>
			{success && <Notification type='success' message='Information updated successfully' />}
			{errorMessage && <Notification type='error' message={errorMessage} />}
			<h1>Update user</h1>
			<UpdateUserForm updateDetails={updateDetails} setUpdateDetails={setUpdateDetails} update={update} />
		</>
	);
}

export default UpdateUser;
