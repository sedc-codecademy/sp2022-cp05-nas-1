import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './AboutLinks.styles';
function AboutLinks() {
	return (
		<Container id='choice'>
			<NavLink to='/about/newstopia' activeClassName='active'>
				About us
			</NavLink>
			<NavLink to='/about/team' activeClassName='active'>
				Our team
			</NavLink>
			<NavLink to='/about/contact' activeClassName='active'>
				Contact us
			</NavLink>
		</Container>
	);
}

export default AboutLinks;
