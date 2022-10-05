import React from 'react';
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
						<a href='../../pages/other/privacy.html'>Privacy Policy</a>
					</li>
					<li className='list-item'>
						<a href='../../pages/other/cookies.html'>Cookies</a>
					</li>
					<li className='list-item'>
						<a href='../../pages/about/about.html' target='_blank'>
							About
						</a>
					</li>
				</ul>
			</div>
		</Container>
	);
}

export default Footer;
