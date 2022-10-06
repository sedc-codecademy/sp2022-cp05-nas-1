import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import { Container } from './User.styles';
function UserLayout({ displaySidebar }) {
	return (
		<Container>
			<Sidebar displaySidebar={displaySidebar} />
			<main>
				<Outlet></Outlet>
			</main>
		</Container>
	);
}

export default UserLayout;
