import React, { useState } from 'react';
import useValidateEmail from '../../hooks/useValidateEmail';
import Form from '../../components/Form/Form';
import FormControl from '../../components/Form/FormControl/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import FormFeedback from '../../components/Form/FormFeedback/FormFeedback';

function Feedback() {
	const [feedBackInfo, setFeedBackInfo] = useState({
		fullName: '',
		email: '',
		feedback: ''
	});
	const { emailFocus, validEmail, toggleEmailFocus } = useValidateEmail(feedBackInfo.email);

	const handleChange = (e) => {
		setFeedBackInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Give us your feedback</h1>
			<Form>
				<FormControl>
					<label htmlFor='fullName'>
						<FontAwesomeIcon
							icon={feedBackInfo.fullName ? faCheck : faX}
							color={feedBackInfo.fullName ? 'green' : 'red'}
						/>
						Enter your name :
					</label>
					<input
						id='fullName'
						type={'text'}
						placeholder='Jon Doe'
						name='fullName'
						value={feedBackInfo.fullName}
						onChange={handleChange}
						required
					/>
				</FormControl>
				<FormControl>
					<label htmlFor='email'>
						<FontAwesomeIcon icon={validEmail ? faCheck : faX} color={validEmail ? 'green' : 'red'} />
						Enter your email :
					</label>
					<input
						id='email'
						type={'email'}
						placeholder='example@email.com'
						name='email'
						value={feedBackInfo.email}
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
					<label htmlFor='feedback'>
						<FontAwesomeIcon
							icon={feedBackInfo.feedback ? faCheck : faX}
							color={feedBackInfo.feedback ? 'green' : 'red'}
						/>
						Feedback :
					</label>
					<textarea
						id='feedback'
						placeholder='Enter feedback'
						name='feedback'
						value={feedBackInfo.feedback}
						onChange={handleChange}
						required
					></textarea>
				</FormControl>
				<button type='submit'>Submit feedback</button>
			</Form>
		</>
	);
}

export default Feedback;
