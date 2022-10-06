import React from 'react';
import { Container } from './Form.styles';

function Form({ children, submitFunction }) {
	return <Container onSubmit={submitFunction}>{children}</Container>;
}

export default Form;
