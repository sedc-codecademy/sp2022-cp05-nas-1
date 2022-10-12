import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ArticleImage, ArticleDetails, ArticleTitle, ArticleDescription } from './ArticleCard.styles';
function ArticleCard({ articleData }) {
	return (
		<Container class='news'>
			<ArticleImage src={articleData.imageUrl} alt={articleData.title} />
			<ArticleDetails class='content'>
				<ArticleTitle class='article-title'>{articleData.title}</ArticleTitle>
				<ArticleDescription>{articleData.description}</ArticleDescription>
				<Link to={`/news/article/${articleData.id}`}>Read more</Link>
			</ArticleDetails>
		</Container>
	);
}

export default ArticleCard;
