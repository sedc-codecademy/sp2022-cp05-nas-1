import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Logo.styles';
function Logo() {
	return (
		<Container>
			<Link to='/'>
				<img src='./assets/images/newstopia-logo.svg' alt='logo' />
			</Link>
		</Container>
	);
}

export default Logo;
