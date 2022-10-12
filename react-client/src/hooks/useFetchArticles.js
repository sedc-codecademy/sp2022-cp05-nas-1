import React, { useState } from 'react';
import axiosSetup from '../api/axios.setup';
const useFetchArticles = () => {
	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');

	const getArticles = async (pageNumber) => {
		try {
			//logic goes here
			const endPoint = `https://localhost:7198/api/Articles/GetAll?page=${pageNumber}`;
			const res = await axiosSetup.get(endPoint);
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
	const getArticlesByCategoryId = async (pageNumber, categoryId) => {
		try {
			//logic goes here
			const endPoint = `https://localhost:7198/api/Articles/GetByCategory?categoryId=${categoryId}&page=${pageNumber}`;
			const res = await axiosSetup.get(endPoint);
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
	const getArticlesBySearchQuery = async (pageNumber, searchQuery) => {
		try {
			//logic goes here
			setLoading(true);
			const endPoint = `https://localhost:7198/api/Articles/Search?search=${searchQuery}&page=${pageNumber}`;
			const res = await axiosSetup.get(endPoint);
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

	return { loading, errorMessage, getArticles, getArticlesByCategoryId, getArticlesBySearchQuery };
};

export default useFetchArticles;
