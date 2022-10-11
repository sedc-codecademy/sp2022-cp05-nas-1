import React, { useState, useEffect } from 'react';
import useCategories from './useCategories';
import useTokenInterceptor from './useTokenInterceptor';
import useAuth from './useAuth';

export const useRssOptions = () => {
	const { auth, setAuth } = useAuth();
	const [rssFeeds, setRssFeeds] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const tokenInterceptor = useTokenInterceptor();

	useEffect(() => {
		const getFeeds = async () => {
			try {
				if (auth.isAdmin) {
					setLoading(true);
					const endpoint = 'rssfeed/getall';
					const res = await tokenInterceptor.get(endpoint);
					const data = res.data;
					setRssFeeds(data);
					setLoading(false);
				}
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
		getFeeds();
	}, [setRssFeeds, tokenInterceptor, auth]);

	const createFeed = async (e, feedDetails, category) => {
		e.preventDefault();
		try {
			setLoading(true);
			const endpoint = 'rssfeed/create';
			const res = await tokenInterceptor.post(
				endpoint,
				JSON.stringify({ name: feedDetails.name, feedUrl: feedDetails.feedUrl, categoryId: feedDetails.categoryId })
			);
			const newId = await res.data;
			const newRss = {
				id: newId,
				feedUrl: feedDetails.feedUrl,
				name: feedDetails.name,
				isActive: true,
				category
			};
			setRssFeeds((prev) => [...prev, newRss]);
			setSuccessMessage('Rss Feed created successfully.');
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
	const editFeed = async (e, feedDetails, id, category) => {
		e.preventDefault();
		try {
			setLoading(true);
			const endpoint = `rssfeed/update/id/${id}`;
			await tokenInterceptor.put(
				endpoint,
				JSON.stringify({ name: feedDetails.name, feedUrl: feedDetails.feedUrl, categoryId: feedDetails.categoryId })
			);
			const newRss = {
				name: feedDetails.name,
				feedUrl: feedDetails.feedUrl,
				isActive: true,
				category
			};
			setRssFeeds((prev) => prev.map((x) => (x.id !== id ? x : { ...x, ...newRss })));
			setLoading(false);
			setSuccessMessage('Rss Feed updated successfully');
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
	const deleteFeed = async (id) => {
		try {
			setLoading(true);
			const endpoint = `rssfeed/delete/id/${id}`;
			await tokenInterceptor.delete(endpoint);
			setLoading(false);
			setRssFeeds((prev) => prev.filter((x) => x.id !== id));
			setSuccessMessage('Rss Feed deleted successfully.');
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

	const toggleFeedActive = async (id) => {
		try {
			setLoading(true);
			const endpoint = `rssfeed/toggle/id/${id}`;
			const res = await tokenInterceptor.put(endpoint);
			const data = res.data;
			setRssFeeds((prev) => prev.map((x) => (x.id !== id ? x : { ...x, isActive: !x.isActive })));
			setSuccessMessage(data);
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
	return { rssFeeds, loading, successMessage, errorMessage, editFeed, deleteFeed, createFeed, toggleFeedActive };
};

export default useRssOptions;
