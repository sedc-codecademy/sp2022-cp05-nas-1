import { faFacebook, faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
	faCheck,
	faEnvelope,
	faLocation,
	faLocationDot,
	faMailBulk,
	faPhone,
	faX
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Form from '../../../components/Form/Form';
import FormControl from '../../../components/Form/FormControl/FormControl';
import FormFeedback from '../../../components/Form/FormFeedback/FormFeedback';
import useValidateEmail from '../../../hooks/useValidateEmail';
import { Container, ContactInfo, Info, SocialMedia } from './Contact.styles';
function Contact() {
	const [contactData, setContactData] = useState({
		fullName: '',
		email: '',
		phoneNumber: '',
		message: ''
	});
	const { emailFocus, validEmail, toggleEmailFocus } = useValidateEmail(contactData.email);

	const handleChange = (e) => {
		setContactData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<Container class='form'>
			<ContactInfo>
				<h3 class='title'>Let's get in touch</h3>
				<p class='text'> Do not hesitate to contact us </p>

				<ContactInfo class='info'>
					<Info class='information'>
						<FontAwesomeIcon icon={faLocationDot} size='2x' color='var(--primary-color)' />
						<p>11th October St. 33a, Skopje 1000 MK</p>
					</Info>
					<Info class='information'>
						<FontAwesomeIcon icon={faEnvelope} size='2x' color='var(--primary-color)' />
						<p>sedcteam@hotmail.com</p>
					</Info>
					<Info class='information'>
						<FontAwesomeIcon icon={faPhone} size='2x' color='var(--primary-color)' />
						<p>088-234-789</p>
					</Info>
				</ContactInfo>

				<SocialMedia>
					<p>Connect with us </p>
					<div class='social-icons'>
						<a href='#'>
							<FontAwesomeIcon icon={faFacebookF} size='2x' color='var(--secondary-color)' />
						</a>
						<a href='#'>
							<FontAwesomeIcon icon={faTwitter} size='2x' color='var(--secondary-color)' />
						</a>
						<a href='#'>
							<FontAwesomeIcon icon={faInstagram} size='2x' color='var(--secondary-color)' />
						</a>
						<a href='#'>
							<FontAwesomeIcon icon={faLinkedin} size='2x' color='var(--secondary-color)' />
						</a>
					</div>
				</SocialMedia>
			</ContactInfo>

			<Form>
				<h3 class='title'>Contact us</h3>
				<FormControl>
					<label htmlFor='fullName'>
						<FontAwesomeIcon
							icon={contactData.fullName ? faCheck : faX}
							color={contactData.fullName ? 'green' : 'red'}
						/>
						First name:
					</label>
					<input
						id='fullName'
						type='text'
						name='fullName'
						value={contactData.fullName}
						onChange={handleChange}
						placeholder='Jon Doe'
					/>
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
						value={contactData.email}
						onChange={handleChange}
						onFocus={toggleEmailFocus}
						onBlur={toggleEmailFocus}
						placeholder='example@email.com'
					/>
					<FormFeedback focused={emailFocus} isValid={validEmail}>
						Email must match the following template : example@email.com
					</FormFeedback>
				</FormControl>
				<FormControl>
					<label htmlFor='phone'>
						<FontAwesomeIcon
							icon={contactData.phoneNumber ? faCheck : faX}
							color={contactData.phoneNumber ? 'green' : 'red'}
						/>
						Phone:
					</label>
					<input
						id='phone'
						type='tel'
						name='phoneNumber'
						value={contactData.phoneNumber}
						onChange={handleChange}
						placeholder='xxx-xxx-xxx'
					/>
				</FormControl>
				<FormControl>
					<label htmlFor='message'>
						<FontAwesomeIcon
							icon={contactData.message ? faCheck : faX}
							color={contactData.message ? 'green' : 'red'}
						/>
						Message:
					</label>
					<textarea
						id='message'
						name='message'
						value={contactData.message}
						onChange={handleChange}
						placeholder='Message'
					></textarea>
				</FormControl>
				<button type='submit'>Contact us</button>
			</Form>
		</Container>
	);
}

export default Contact;
