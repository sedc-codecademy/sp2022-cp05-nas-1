import React, { useState } from 'react';
import useCategories from './useCategories';
import useTokenInterceptor from './useTokenInterceptor';

export const useCategoryOptions = () => {
	const { setCategories } = useCategories();
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const tokenInterceptor = useTokenInterceptor();

	const createCategory = async (e, categoryName) => {
		e.preventDefault();
		try {
			setLoading(true);
			const endpoint = 'category/create';
			const res = await tokenInterceptor.post(endpoint, JSON.stringify({ name: categoryName }));
			const newId = res.data;
			setCategories((prev) => [...prev, { id: newId, name: categoryName }]);
			setSuccessMessage('Category created successfully.');
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
	const editCategory = async (e, categoryName, id) => {
		e.preventDefault();
		try {
			setLoading(true);
			const endpoint = `category/update/id/${id}`;
			await tokenInterceptor.put(endpoint, JSON.stringify({ name: categoryName }));
			setCategories((prev) => prev.map((x) => (x.id !== id ? x : { id, name: categoryName })));
			setLoading(false);
			setSuccessMessage('Category updated successfully');
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
	const deleteCategory = async (id) => {
		try {
			setLoading(true);
			const endpoint = `category/delete/id/${id}`;
			await tokenInterceptor.delete(endpoint);
			setLoading(false);
			setSuccessMessage('Category deleted successfully');
			setCategories((prev) => prev.filter((x) => x.id !== id));
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
	return { loading, successMessage, errorMessage, editCategory, deleteCategory, createCategory };
};

export default useCategoryOptions;
