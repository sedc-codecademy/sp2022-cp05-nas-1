import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../../components/Categories/Categories';
import AdsSidebar from '../../components/AdsSidebar/AdsSidebar';
import { Container } from './Layout.styles';
function Layout({ displayCategories }) {
	return (
		<Container>
			<Categories displayCategories={displayCategories} />
			<main>
				<Outlet />
			</main>
			<AdsSidebar />
		</Container>
	);
}

export default Layout;
