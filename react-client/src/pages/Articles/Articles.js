import React from 'react';
import { useParams } from 'react-router-dom';

function Articles() {
	const { pageNumber, categoryName, searchQuery } = useParams();
	console.log('page number', pageNumber);
	console.log('category name', categoryName);
	console.log('search query', searchQuery);

	if (categoryName) {
		return (
			<div>
				<h1>Getting results for category : {categoryName}</h1>
			</div>
		);
	}

	if (searchQuery) {
		return (
			<div>
				<h1>Getting results for search result : {searchQuery}</h1>
			</div>
		);
	}
	return (
		<div>
			<h1>get all articles</h1>
		</div>
	);
}

export default Articles;
