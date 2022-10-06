import axios from 'axios';

const BASE_URL = 'https://localhost:7198/api';

export default axios.create({
	baseURL: BASE_URL
});

export const axiosInterceptor = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-type': 'application/json'
	}
});
