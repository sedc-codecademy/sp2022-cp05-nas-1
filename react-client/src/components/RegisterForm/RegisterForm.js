import React from 'react';
import useValidateEmail from '../../hooks/useValidateEmail';
import useValidatePassword from '../../hooks/useValidatePassword';
import useValidateUsername from '../../hooks/useValidateUsername';
import Form from '../Form/Form';
import FormControl from '../Form/FormControl/FormControl';
import FormFeedback from '../Form/FormFeedback/FormFeedback';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RegisterForm({ registerDetails, setRegisterDetails, register }) {
	const { firstName, lastName, username, email, password, confirmPassword } = registerDetails;
	const { usernameFocus, validUsername, toggleUsernameFocus } = useValidateUsername(username);
	const { emailFocus, validEmail, toggleEmailFocus } = useValidateEmail(email);

	const {
		passwordFocus,
		togglePasswordFocus,
		validPassword,
		confirmPasswordFocus,
		toggleConfirmPasswordFocus,
		validConfirmPassword
	} = useValidatePassword(password, confirmPassword);

	const handleChange = (e) => {
		setRegisterDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<Form autoComplete='none' submitFunction={register}>
			<FormControl>
				<label htmlFor='firstName'>
					<FontAwesomeIcon icon={firstName ? faCheck : faX} color={firstName ? 'green' : 'red'} />
					First name:
				</label>
				<input
					id='firstName'
					type='text'
					name='firstName'
					value={firstName}
					autoComplete='none'
					placeholder='Jon'
					onChange={handleChange}
					required
				/>
				<FormFeedback />
			</FormControl>
			<FormControl>
				<label htmlFor='lastName'>
					<FontAwesomeIcon icon={lastName ? faCheck : faX} color={lastName ? 'green' : 'red'} />
					Last name:
				</label>
				<input
					id='lastName'
					type='text'
					name='lastName'
					value={lastName}
					autoComplete='none'
					placeholder='Doe'
					onChange={handleChange}
					required
				/>
				<FormFeedback />
			</FormControl>
			<FormControl>
				<label htmlFor='username'>
					<FontAwesomeIcon icon={validUsername ? faCheck : faX} color={validUsername ? 'green' : 'red'} />
					Username:
				</label>
				<input
					id='username'
					type='text'
					name='username'
					value={username}
					autoComplete='none'
					placeholder='JonDoe'
					onChange={handleChange}
					onFocus={toggleUsernameFocus}
					onBlur={toggleUsernameFocus}
					required
				/>
				<FormFeedback focused={usernameFocus} isValid={validUsername}>
					Username must be 6-24 characters long.Must start with a letter. Can contain numbers.
				</FormFeedback>
			</FormControl>
			<FormControl>
				<label htmlFor='email'>
					<FontAwesomeIcon icon={validEmail ? faCheck : faX} color={validEmail ? 'green' : 'red'} />
					Email:
				</label>
				<input
					id='email'
					type='email'
					name='email'
					value={email}
					autoComplete='none'
					placeholder='jon.doe@email.com'
					onChange={handleChange}
					onFocus={toggleEmailFocus}
					onBlur={toggleEmailFocus}
					required
				/>
				<FormFeedback focused={emailFocus} isValid={validEmail}>
					Email must match the following template : example@email.com
				</FormFeedback>
			</FormControl>
			<FormControl>
				<label htmlFor='password'>
					<FontAwesomeIcon icon={validPassword ? faCheck : faX} color={validPassword ? 'green' : 'red'} />
					Password:
				</label>
				<input
					id='password'
					type='password'
					name='password'
					value={password}
					autoComplete='none'
					placeholder='password123'
					onChange={handleChange}
					onFocus={togglePasswordFocus}
					onBlur={togglePasswordFocus}
					required
				/>
				<FormFeedback focused={passwordFocus} isValid={validPassword}>
					Password must be 6-24 characters must contain at least one number can contain special characters.
				</FormFeedback>
			</FormControl>
			<FormControl>
				<label htmlFor='confirmPassword'>
					<FontAwesomeIcon
						icon={validConfirmPassword && confirmPassword ? faCheck : faX}
						color={validConfirmPassword && confirmPassword ? 'green' : 'red'}
					/>
					Confirm password:
				</label>
				<input
					id='confirmPassword'
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					autoComplete='none'
					placeholder='password123'
					onChange={handleChange}
					onFocus={toggleConfirmPasswordFocus}
					onBlur={toggleConfirmPasswordFocus}
					required
				/>
				<FormFeedback focused={confirmPasswordFocus} isValid={validConfirmPassword && validPassword}>
					Passwords do not match
				</FormFeedback>
			</FormControl>

			<button type='submit'>Register</button>
		</Form>
	);
}

export default RegisterForm;
