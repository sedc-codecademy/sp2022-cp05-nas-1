import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Category.styles';

function Category({ category, categoryId }) {
	return (
		<Container>
			<Link to={`news/${category}/page/1`}>{category}</Link>
		</Container>
	);
}

export default Category;
