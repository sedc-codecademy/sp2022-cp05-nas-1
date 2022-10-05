import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Category.styles';

function Category({ category }) {
	return (
		<Container>
			<Link to='/'>{category}</Link>
		</Container>
	);
}

export default Category;
