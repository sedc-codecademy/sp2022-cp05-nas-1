import React, { useState, useEffect } from 'react';
import { axiosInterceptor } from '../api/axios.setup';
import useAuth from './useAuth';
import useTokenInterceptor from './useTokenInterceptor';

const useAdsOptions = () => {
	const { auth } = useAuth();
	const [ads, setAds] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const tokenInterceptor = useTokenInterceptor();

	useEffect(() => {
		const getAds = async () => {
			try {
				if (auth.isAdmin) {
					setLoading(true);
					const endpoint = 'ad/getads';
					const res = await tokenInterceptor.get(endpoint);
					const data = await res.data;
					setAds(data);
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
		getAds();
	}, [auth.isAdmin, tokenInterceptor]);

	const createAd = async (e, adDetails) => {
		e.preventDefault();
		try {
			setLoading(true);
			const endpoint = 'ad/createad';
			const res = await tokenInterceptor.post(endpoint, adDetails);
			const data = await res.data;
			const newAd = {
				id: data,
				adName: adDetails.adName,
				imageUrl: adDetails.imageUrl,
				bannerImageUrl: adDetails.bannerImageUrl,
				redirectUrl: adDetails.redirectUrl,
				isAdActive: true
			};
			setSuccessMessage('Ad created successfully.');
			setAds((prev) => [newAd, ...prev]);
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

	const deleteAd = async (id) => {
		try {
			setLoading(true);
			const endpoint = `Ad/DeleteAd/${id}`;
			await axiosInterceptor.delete(endpoint);
			setSuccessMessage('Ad deleted successfully.');
			setAds((prev) => prev.filter((x) => x.id !== id));
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

	const toggleAd = async (id) => {
		try {
			setLoading(true);
			const endpoint = `Ad/Toggle/id/${id}`;
			const res = await axiosInterceptor.put(endpoint);
			const data = await res.data;
			setAds((prev) => prev.map((x) => (x.id !== id ? x : { ...x, isAdActive: !x.isAdActive })));
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

	const editAd = async (e, adDetails, id) => {
		e.preventDefault();
		try {
			setLoading(true);
			const endpoint = `Ad/UpdateAd/id/${id}`;
			await axiosInterceptor.put(endpoint, adDetails);
			setAds((prev) =>
				prev.map((x) =>
					x.id !== id
						? x
						: {
								...x,
								adName: adDetails.adName,
								imageUrl: adDetails.imageUrl,
								bannerImageUrl: adDetails.bannerImageUrl,
								redirectUrl: adDetails.redirectUrl
						  }
				)
			);
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

	return { ads, loading, errorMessage, successMessage, createAd, deleteAd, toggleAd, editAd };
};

export default useAdsOptions;
