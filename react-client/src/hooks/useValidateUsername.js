import React, { useState, useEffect } from 'react';
import { USERNAME_REGEX } from '../utilities/regex';

const useValidateUsername = (username) => {
	const [usernameFocus, setUsernameFocus] = useState(false);
	const [validUsername, setValidUsername] = useState(false);

	const toggleUsernameFocus = () => {
		setUsernameFocus((prev) => !prev);
	};

	useEffect(() => {
		const result = USERNAME_REGEX.test(username);
		setValidUsername(result);
	}, [username]);

	return { usernameFocus, validUsername, toggleUsernameFocus };
};

export default useValidateUsername;
