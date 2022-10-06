import React, { useState, useEffect } from 'react';
import { EMAIL_REGEX } from '../utilities/regex';

const useValidateEmail = (email) => {
	const [emailFocus, setEmailFocus] = useState(false);
	const [validEmail, setValidEmail] = useState(false);

	const toggleEmailFocus = () => {
		setEmailFocus((prev) => !prev);
	};

	useEffect(() => {
		const result = EMAIL_REGEX.test(email);
		setValidEmail(result);
	}, [email]);

	return { emailFocus, validEmail, toggleEmailFocus };
};

export default useValidateEmail;
