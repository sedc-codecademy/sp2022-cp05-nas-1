import React from 'react';
import Form from '../Form/Form';
import FormControl from '../Form/FormControl/FormControl';
import FormFeedback from '../Form/FormFeedback/FormFeedback';
import useValidateEmail from '../../hooks/useValidateEmail';
import useValidateUsername from '../../hooks/useValidateUsername';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UpdateUserForm({ updateDetails, setUpdateDetails, update }) {
	const { firstName, lastName, username, email, password } = updateDetails;
	const { usernameFocus, validUsername, toggleUsernameFocus } = useValidateUsername(username);
	const { emailFocus, validEmail, toggleEmailFocus } = useValidateEmail(email);
	const handleChange = (e) => {
		setUpdateDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<Form submitFunction={update}>
			<FormControl>
				<label htmlFor='firstName'>
					<FontAwesomeIcon icon={firstName ? faCheck : faX} color={firstName ? 'green' : 'red'} />
					First name :
				</label>
				<input
					id='firstName'
					type='text'
					name='firstName'
					value={firstName}
					onChange={handleChange}
					placeholder='Jon'
					required
				/>
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
					onChange={handleChange}
					placeholder='Doe'
					required
				/>
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
					onChange={handleChange}
					onFocus={toggleUsernameFocus}
					onBlur={toggleUsernameFocus}
					placeholder='jonDoe'
					required
				/>
				<FormFeedback focused={usernameFocus} isValid={validUsername}>
					Username must be 6-24 characters long.Must start with a letter. Can contain numbers.
				</FormFeedback>
			</FormControl>
			<FormControl>
				<label htmlFor='email'>
					<FontAwesomeIcon icon={validEmail ? faCheck : faX} color={validEmail ? 'green' : 'red'} />
					Email :
				</label>
				<input
					id='email'
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					onFocus={toggleEmailFocus}
					onBlur={toggleEmailFocus}
					placeholder='jon.doe@email.com'
					required
				/>
				<FormFeedback focused={emailFocus} isValid={validEmail}>
					Email must match the following template : example@email.com
				</FormFeedback>
			</FormControl>
			<FormControl>
				<label htmlFor='password'>Password : </label>
				<input
					id='password'
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					placeholder='enter your password'
					required
				/>
			</FormControl>
			<button type='submit'>Update account information</button>
		</Form>
	);
}

export default UpdateUserForm;
