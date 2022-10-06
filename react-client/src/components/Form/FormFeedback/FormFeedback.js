import React from 'react';
import { Container } from './FormFeedback.styles';

function FormFeedback({ children, focused, isValid }) {
	return (
		<Container focused={focused} isValid={isValid}>
			{children}
		</Container>
	);
}

export default FormFeedback;
