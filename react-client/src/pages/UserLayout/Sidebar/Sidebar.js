import React from 'react';
import { Container, ListItems } from './Sidebar.styles';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
function Sidebar({ displaySidebar }) {
	const { auth } = useAuth();

	if (auth.isAdmin) {
		return (
			<Container displaySidebar={displaySidebar}>
				<ListItems>
					<NavLink to='/adminpanel/details' activeClassName='active'>
						Details
					</NavLink>
					<NavLink to='/adminpanel/changeInformation' activeClassName='active'>
						Change Information
					</NavLink>
					<NavLink to='/adminpanel/changePassword' activeClassName='active'>
						Change password
					</NavLink>
					<NavLink to='/adminpanel/registeradmin' activeClassName='active'>
						Register admin
					</NavLink>
					<NavLink to='/adminpanel/categories' activeClassName='active'>
						Categories panel
					</NavLink>
					<NavLink to='/adminpanel/rssfeeds' activeClassName='active'>
						RSS feeds panel
					</NavLink>
					<NavLink to='/adminpanel/users' activeClassName='active'>
						Users panel
					</NavLink>
				</ListItems>
			</Container>
		);
	}
	return (
		<Container displaySidebar={displaySidebar}>
			<ListItems>
				<NavLink to='/user/details' activeClassName='active'>
					Details
				</NavLink>
				<NavLink to='/user/changeInformation' activeClassName='active'>
					Change Information
				</NavLink>
				<NavLink to='/user/changePassword' activeClassName='active'>
					Change password
				</NavLink>
			</ListItems>
		</Container>
	);
}

export default Sidebar;
