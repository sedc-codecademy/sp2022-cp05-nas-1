import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Notification from '../../components/Notification/Notification';
import useCategories from '../../hooks/useCategories';
import useFetchArticles from '../../hooks/useFetchArticles';
import ArticleCard from './ArticleCard/ArticleCard';

import Hero from './Hero/Hero';
import PaginationNavigation from './PaginationNavigation/PaginationNavigation';
function Articles() {
	const { categories } = useCategories();
	const [response, setResponse] = useState([]);
	const { pageNumber, categoryName, searchQuery } = useParams();
	const { loading, errorMessage, getArticles, getArticlesByCategoryId, getArticlesBySearchQuery } = useFetchArticles();

	useEffect(() => {
		const getData = async () => {
			if (categoryName) {
				const categoryId = categories.find((x) => x.name === categoryName).id;
				const res = await getArticlesByCategoryId(pageNumber, categoryId);
				setResponse(res);
			} else if (searchQuery) {
				const res = await getArticlesBySearchQuery(pageNumber, searchQuery);
				setResponse(res);
			} else {
				const res = await getArticles(pageNumber);
				setResponse(res);
			}
		};
		getData();
	}, [pageNumber, categoryName, searchQuery]);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (response.articles.length === 0) {
		if (categoryName) {
			return <h1>No news in the : "{categoryName}" category</h1>;
		}
		if (searchQuery) {
			return <h1>Your search for : "{searchQuery.replace('_', ' ')}" returned no results. </h1>;
		}
		return <h1>Something went wrong.</h1>;
	}

	return (
		<>
			{errorMessage && <Notification type='error' message={errorMessage} />}
			{response.articles.map((x, i) => {
				if (i === 0 && parseInt(pageNumber) === 1) {
					return <Hero articleData={x} />;
				}
				return <ArticleCard articleData={x} />;
			})}

			<PaginationNavigation
				currentPage={pageNumber}
				next={response.next}
				previous={response.previous}
				maxPage={response.totalPages}
			/>
		</>
	);
}

export default Articles;
