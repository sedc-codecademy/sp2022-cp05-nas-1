import React, { useState } from 'react';
import axios from '../api/axios.setup';

const useFetchArticle = () => {
	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');

	const fetchArticle = async (articleId) => {
		try {
			const endpoint = `https://localhost:7198/api/Articles/GetById/${articleId}`;
			const res = await axios.get(endpoint);
			const data = await res.data;
			setLoading(false);
			return data;
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

	return { loading, errorMessage, fetchArticle };
};

export default useFetchArticle;
