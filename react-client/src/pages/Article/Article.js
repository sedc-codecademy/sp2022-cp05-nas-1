import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import useFetchArticle from '../../hooks/useFetchArticle';
import { ArticleImage, ArticleInfo, ArticleTitle, ArticleDetails, ArticleDescription } from './Article.styles';

function Article() {
	const { articleId } = useParams();
	const [article, setArticle] = useState({});
	const { loading, errorMessage, fetchArticle } = useFetchArticle();
	const date = new Date(article.datePublished);
	const dateFormat = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

	useEffect(() => {
		const getData = async () => {
			const data = await fetchArticle(articleId);
			console.log(data);
			setArticle(data);
		};
		getData();
	}, [articleId]);

	if (loading) {
		return <LoadingSpinner></LoadingSpinner>;
	}
	return (
		<>
			<ArticleImage src={article.imageUrl} alt={article.title} />
			<ArticleInfo>
				<ArticleTitle>{article.title}</ArticleTitle>
				<ArticleDetails>
					<p>
						Source :{' '}
						<a
							href={article.sourceUrl}
							className='original-source'
							target='_blank'
							title='Click to open original article'
						>
							{article.sourceUrl}
						</a>
					</p>
					<p>
						Published : <b id='article-date'>{dateFormat}</b>
					</p>
					<p>
						Original article :{' '}
						<a href={article.originalArticleUrl} target='_blank' className='original-source'>
							Read full article
						</a>
					</p>
				</ArticleDetails>
				<ArticleDescription>
					<h2>Article summary : </h2>
					<p>{article.description}</p>
				</ArticleDescription>
			</ArticleInfo>
		</>
	);
}

export default Article;
