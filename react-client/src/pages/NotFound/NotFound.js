import React from 'react';
import { Container } from './NotFound.styles';
import { Link } from 'react-router-dom';
function NotFound() {
	return (
		<Container>
			<h1>The page you are trying to reach does not exist.</h1>
			<h2>
				Back to <Link to='/'>Home</Link>
			</h2>
		</Container>
	);
}

export default NotFound;
