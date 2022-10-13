import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import useArticleOptions from '../../hooks/useArticleOptions';
import { ArticleImage, ArticleInfo, ArticleTitle, ArticleDetails, ArticleDescription } from './Article.styles';
import AdBanner from '../../components/AdBanner/AdBanner';
import Form from '../../components/Form/Form';
import FormControl from '../../components/Form/FormControl/FormControl';
import CommentForm from './CommentForm/CommentForm';
import Comments from './Comments/Comments';
import Notification from '../../components/Notification/Notification';
function Article() {
	const { auth } = useAuth();
	const { articleId } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const { loading, successMessage, errorMessage, article, submitComment, editComment, deleteComment } =
		useArticleOptions();

	const date = new Date(article.datePublished);
	const dateFormat = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

	const navigateToLogin = () => {
		navigate('/login', { replace: true, state: location });
	};

	if (loading) {
		return <LoadingSpinner></LoadingSpinner>;
	}

	return (
		<>
			{errorMessage && <Notification type='error' message={errorMessage} />}
			{successMessage && <Notification type='success' message={successMessage} />}
			<ArticleImage src={article.imageUrl} alt={article.title} />
			<ArticleInfo>
				<ArticleTitle>{article.title}</ArticleTitle>
				<ArticleDetails>
					<p>
						Source :
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
						Original article :
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
			<AdBanner />
			{auth.token ? (
				<>
					<CommentForm submitComment={submitComment} />
					<Comments comments={article.comments} deleteComment={deleteComment} editComment={editComment} />
				</>
			) : (
				<h3>
					Sign in to leave a comment. <button onClick={navigateToLogin}>Sign in</button>
				</h3>
			)}
		</>
	);
}

export default Article;
