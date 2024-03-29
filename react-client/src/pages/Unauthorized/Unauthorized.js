import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Unauthorized.styles';

function Unauthorized() {
	return (
		<Container>
			<h1>You are not authorized to perform this action.</h1>
			<h2>
				Back to <Link to='/'>Home</Link>
			</h2>
		</Container>
	);
}

export default Unauthorized;
