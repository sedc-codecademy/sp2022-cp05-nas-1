import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Title } from '../About.Styles';
import AboutLinks from '../AboutLinks/AboutLinks';
function AboutLayout() {
	const location = useLocation();
	const title =
		location.pathname === '/about/contact'
			? 'Contact us'
			: location.pathname === '/about/team'
			? 'Our Team'
			: 'About Newstopia';
	return (
		<>
			<Title>{title}</Title>
			<AboutLinks />
			<Outlet />
		</>
	);
}

export default AboutLayout;
