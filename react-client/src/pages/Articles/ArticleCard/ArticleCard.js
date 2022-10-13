import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ArticleImage, ArticleDetails, ArticleTitle, ArticleDescription } from './ArticleCard.styles';
function ArticleCard({ articleData }) {
	return (
		<Container>
			<ArticleImage src={articleData.imageUrl} alt={articleData.title} />
			<ArticleDetails>
				<ArticleTitle>{articleData.title}</ArticleTitle>
				<ArticleDescription>{articleData.description}</ArticleDescription>
				<Link to={`/news/article/${articleData.id}`}>Read more</Link>
			</ArticleDetails>
		</Container>
	);
}

export default ArticleCard;
