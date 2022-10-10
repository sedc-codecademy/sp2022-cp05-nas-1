import { createContext, useState, useEffect } from 'react';
import axios from '../api/axios.setup';
const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {
	const [categories, setCategories] = useState([
		{
			id: '',
			name: ''
		}
	]);
	useEffect(() => {
		const getCategories = async () => {
			const endpoint = 'category/getall';
			const res = await axios.get(endpoint);
			const data = res.data;
			setCategories(data);
		};
		getCategories();
	}, [setCategories]);

	return <CategoriesContext.Provider value={{ categories, setCategories }}>{children}</CategoriesContext.Provider>;
};

export default CategoriesContext;
