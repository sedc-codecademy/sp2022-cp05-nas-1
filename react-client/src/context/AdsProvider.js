import { createContext, useState, useEffect } from 'react';
import axios from '../api/axios.setup';
const AdsContext = createContext({});

export const AdsProvider = ({ children }) => {
	const [ads, setAds] = useState([
		{
			id: '',
			adName: '',
			imageUrl: '',
			bannerImageUrl: '',
			redirectUrl: '',
			isAdActive: false
		}
	]);
	useEffect(() => {
		const getAds = async () => {
			const endpoint = 'Ad/GetActiveAds';
			const res = await axios.get(endpoint);
			const data = res.data;
			setAds(data);
		};
		getAds();
	}, [setAds]);

	return <AdsContext.Provider value={{ ads, setAds }}>{children}</AdsContext.Provider>;
};

export default AdsContext;
