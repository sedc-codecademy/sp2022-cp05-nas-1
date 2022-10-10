import React from 'react';
import { Container, ListItems } from './Sidebar.styles';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
function Sidebar({ displaySidebar, setDisplaySidebar }) {
	const { auth } = useAuth();
	const handleClick = () => {
		setDisplaySidebar(false);
	};
	if (auth.isAdmin) {
		return (
			<Container displaySidebar={displaySidebar}>
				<ListItems>
					<NavLink to='/adminpanel/details' activeClassName='active' onClick={handleClick}>
						Details
					</NavLink>
					<NavLink to='/adminpanel/changeInformation' activeClassName='active' onClick={handleClick}>
						Change Information
					</NavLink>
					<NavLink to='/adminpanel/changePassword' activeClassName='active' onClick={handleClick}>
						Change password
					</NavLink>
					<NavLink to='/adminpanel/registeradmin' activeClassName='active' onClick={handleClick}>
						Register admin
					</NavLink>
					<NavLink to='/adminpanel/categories' activeClassName='active' onClick={handleClick}>
						Categories panel
					</NavLink>
					<NavLink to='/adminpanel/rssfeeds' activeClassName='active' onClick={handleClick}>
						RSS feeds panel
					</NavLink>
					<NavLink to='/adminpanel/users' activeClassName='active' onClick={handleClick}>
						Users panel
					</NavLink>
				</ListItems>
			</Container>
		);
	}
	return (
		<Container displaySidebar={displaySidebar}>
			<ListItems>
				<NavLink to='/user/details' activeClassName='active' onClick={handleClick}>
					Details
				</NavLink>
				<NavLink to='/user/changeInformation' activeClassName='active' onClick={handleClick}>
					Change Information
				</NavLink>
				<NavLink to='/user/changePassword' activeClassName='active' onClick={handleClick}>
					Change password
				</NavLink>
			</ListItems>
		</Container>
	);
}

export default Sidebar;
