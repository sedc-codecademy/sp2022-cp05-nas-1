import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Footer.styles';

function Footer() {
	return (
		<Container>
			<div className='copyright'>
				<p>&copy;2022 NEWSTOPIA. All rights reserved.</p>
			</div>
			<div className='footer-nav-links'>
				<ul className='nav-list'>
					<li className='list-item'>
						<Link to='/privacy'>Privacy Policy</Link>
					</li>
					<li className='list-item'>
						<Link to='/cookies'>Cookies</Link>
					</li>
					<li className='list-item'>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</div>
		</Container>
	);
}

export default Footer;
