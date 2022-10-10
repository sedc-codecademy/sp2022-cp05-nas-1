import React from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';
import Category from '../Category/Category';
import { Container, ListItems, Links } from './Categories.styles';

function Categories({ displayCategories }) {
	const { categories } = useCategories();
	return (
		<Container displayCategories={displayCategories}>
			<h2>Categories</h2>
			<ListItems>
				{categories.map((x) => (
					<Category key={x.id} category={x.name} categoryId={x.id} />
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
