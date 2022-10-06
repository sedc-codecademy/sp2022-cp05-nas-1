import { useEffect } from 'react';
import { axiosInterceptor } from '../api/axios.setup';
import useAuth from './useAuth';

function useTokenInterceptor() {
	const { auth } = useAuth();
	useEffect(() => {
		const requestIntercept = axiosInterceptor.interceptors.request.use(
			(config) => {
				if (!config.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
		);

		const responseIntercept = axiosInterceptor.interceptors.response.use(
			(response) => response,
			async (error) => {
				return Promise.reject(error);
			}
		);
		return () => {
			axiosInterceptor.interceptors.response.eject(requestIntercept);
			axiosInterceptor.interceptors.response.eject(responseIntercept);
		};
	}, [auth]);

	return axiosInterceptor;
}

export default useTokenInterceptor;
