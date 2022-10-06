import React from 'react';
import Form from '../Form/Form';
import FormControl from '../Form/FormControl/FormControl';
import FormFeedback from '../Form/FormFeedback/FormFeedback';
import useValidatePassword from '../../hooks/useValidatePassword';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
function ChangePasswordForm({ updateDetails, setUpdateDetails, update }) {
	const { oldPassword, newPassword, confirmNewPassword } = updateDetails;
	const {
		passwordFocus,
		togglePasswordFocus,
		validPassword,
		confirmPasswordFocus,
		toggleConfirmPasswordFocus,
		validConfirmPassword
	} = useValidatePassword(newPassword, confirmNewPassword);

	const handleChange = (e) => {
		setUpdateDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<Form submitFunction={update}>
			<FormControl>
				<label htmlFor='oldPassword'>Old password:</label>
				<input
					id='oldPassword'
					type='password'
					name='oldPassword'
					value={oldPassword}
					onChange={handleChange}
					placeholder='Old password'
					required
				/>
			</FormControl>
			<FormControl>
				<label htmlfor='newPassword'>
					<FontAwesomeIcon icon={validPassword ? faCheck : faX} color={validPassword ? 'green' : 'red'} />
					New password:
				</label>
				<input
					id='newPassword'
					type='password'
					name='newPassword'
					value={newPassword}
					onChange={handleChange}
					onFocus={togglePasswordFocus}
					onBlur={togglePasswordFocus}
					placeholder='New password'
					required
				/>
				<FormFeedback focused={passwordFocus} isValid={validPassword}>
					Password must be 6-24 characters must contain at least one number can contain special characters.
				</FormFeedback>
			</FormControl>
			<FormControl>
				<label htmlFor='confirmNewPassword'>
					<FontAwesomeIcon
						icon={validConfirmPassword && confirmNewPassword ? faCheck : faX}
						color={validConfirmPassword && confirmNewPassword ? 'green' : 'red'}
					/>
					Confirm new password:
				</label>
				<input
					id='confirmNewPassword'
					type='password'
					name='confirmNewPassword'
					value={confirmNewPassword}
					onChange={handleChange}
					onFocus={toggleConfirmPasswordFocus}
					onBlur={toggleConfirmPasswordFocus}
					placeholder='Confirm new password'
					required
				/>
				<FormFeedback focused={confirmPasswordFocus} isValid={validConfirmPassword && validPassword}>
					Passwords do not match
				</FormFeedback>
			</FormControl>
			<button type='submit'>Change password</button>
		</Form>
	);
}

export default ChangePasswordForm;
