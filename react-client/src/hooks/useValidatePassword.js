import React, { useState, useEffect } from 'react';
import { PASSWORD_REGEX } from '../utilities/regex';

const useValidatePassword = (password, confirmPassword) => {
	const [passwordFocus, setPasswordFocus] = useState(false);
	const [validPassword, setValidPassword] = useState(false);

	const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
	const [validConfirmPassword, setValidConfirmPassword] = useState(false);

	const togglePasswordFocus = () => {
		setPasswordFocus((prev) => !prev);
	};
	const toggleConfirmPasswordFocus = () => {
		setConfirmPasswordFocus((prev) => !prev);
	};

	useEffect(() => {
		const result = PASSWORD_REGEX.test(password);
		setValidPassword(result);
		const match = password === confirmPassword;
		setValidConfirmPassword(match);
	}, [password, confirmPassword]);

	return {
		passwordFocus,
		togglePasswordFocus,
		validPassword,
		confirmPasswordFocus,
		toggleConfirmPasswordFocus,
		validConfirmPassword
	};
};

export default useValidatePassword;
