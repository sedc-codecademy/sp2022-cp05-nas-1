import React, { useEffect, useState } from 'react';
import useTokenInterceptor from './useTokenInterceptor';
import axios from '../api/axios.setup';
import useAuth from './useAuth';
import { useParams } from 'react-router-dom';

const useArticleOptions = () => {
	const { auth } = useAuth();
	const { articleId } = useParams();
	const [article, setArticle] = useState({});
	const [loading, setLoading] = useState(true);
	const [successMessage, setSuccessMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const tokenInterceptor = useTokenInterceptor();

	useEffect(() => {
		const fetchArticle = async (articleId) => {
			try {
				const endpoint = `https://localhost:7198/api/Articles/GetById/${articleId}`;
				const res = await axios.get(endpoint);
				const data = await res.data;
				setLoading(false);
				setArticle(data);
				console.log(article);
			} catch (err) {
				setLoading(false);
				if (!err?.response?.status) {
					setErrorMessage('No server responce.');
				} else if (!err.response.data) {
					setErrorMessage('Something went wrong.');
				} else {
					setErrorMessage(err.response.data);
				}
				setTimeout(() => {
					setErrorMessage('');
				}, 3000);
			}
		};
		fetchArticle(articleId);
	}, [articleId]);

	const submitComment = async (e, content, articleId) => {
		e.preventDefault();
		try {
			setLoading(true);
			const endpoint = `Comment/Create`;
			const res = await tokenInterceptor.post(endpoint, { content, articleId });
			const data = await res.data;
			setSuccessMessage('Comment submited.');
			setArticle((prev) => ({
				...prev,
				comments: [
					...prev.comments,
					{ id: data, articleId, content, dateCreated: Date.now(), user: { id: auth.id, username: auth.username } }
				]
			}));
			setLoading(false);
			setTimeout(() => {
				setSuccessMessage('');
			}, 3000);
		} catch (err) {
			setLoading(false);
			if (!err?.response?.status) {
				setErrorMessage('No server responce.');
			} else if (!err.response.data) {
				setErrorMessage('Something went wrong.');
			} else {
				setErrorMessage(err.response.data);
			}
			setTimeout(() => {
				setErrorMessage('');
			}, 3000);
		}
	};

	const editComment = async (e, content, commentId) => {
		e.preventDefault();
		try {
			setLoading(true);
			const endpoint = `Comment/Update/${commentId}`;
			await tokenInterceptor.put(endpoint, { content });
			setArticle((prev) => ({
				...prev,
				comments: [...prev.comments.map((x) => (x.id !== commentId ? x : { ...x, content }))]
			}));
			setSuccessMessage('Comment updated.');
			setLoading(false);
			setTimeout(() => {
				setSuccessMessage('');
			}, 3000);
		} catch (err) {
			setLoading(false);
			if (!err?.response?.status) {
				setErrorMessage('No server responce.');
			} else if (!err.response.data) {
				setErrorMessage('Something went wrong.');
			} else {
				setErrorMessage(err.response.data);
			}
			setTimeout(() => {
				setErrorMessage('');
			}, 3000);
		}
	};

	const deleteComment = async (commentId) => {
		try {
			setLoading(true);
			const endpoint = `Comment/Delete/${commentId}`;
			await tokenInterceptor.delete(endpoint);
			setArticle((prev) => ({ ...prev, comments: [...prev.comments.filter((x) => x.id !== parseInt(commentId))] }));
			setSuccessMessage('Comment deleted.');
			setLoading(false);
			setTimeout(() => {
				setSuccessMessage('');
			}, 3000);
		} catch (err) {
			setLoading(false);
			if (!err?.response?.status) {
				setErrorMessage('No server responce.');
			} else if (!err.response.data) {
				setErrorMessage('Something went wrong.');
			} else {
				setErrorMessage(err.response.data);
			}
			setTimeout(() => {
				setErrorMessage('');
			}, 3000);
		}
	};

	return { loading, successMessage, errorMessage, article, submitComment, deleteComment, editComment };
};

export default useArticleOptions;
