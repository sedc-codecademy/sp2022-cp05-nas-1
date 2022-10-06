import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Logo.styles';
import logo from '../../../static/newstopia-logo.svg';
function Logo() {
	return (
		<Container>
			<Link to='/'>
				<img src={logo} alt='newstopia logo' />
			</Link>
		</Container>
	);
}

export default Logo;
