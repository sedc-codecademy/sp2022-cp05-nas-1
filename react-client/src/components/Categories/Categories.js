import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../Category/Category';
import { Container, ListItems, Links } from './Categories.styles';

function Categories({ displayCategories }) {
	const categories = ['Politics', 'Business', 'Science', 'Tech', 'Gaming', 'Showbiz', 'Sport'];
	return (
		<Container displayCategories={displayCategories}>
			<h2>Categories</h2>
			<ListItems>
				{categories.map((x) => (
					<Category category={x} />
				))}
			</ListItems>
			<Links>
				<Link to='/archive'>Archive</Link>
				<Link to='/feedback'>Leave feedback</Link>
			</Links>
		</Container>
	);
}

export default Categories;
