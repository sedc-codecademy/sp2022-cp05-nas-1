import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
export const getCityName = async (coords) => {
	const ednpoint = `${BASE_URL}/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=1&appid=${API_KEY}`;
	const res = await axios.get(ednpoint);
	return res.data;
};

export const getCurrentWeaherData = async (coords) => {
	const ednpoint = `${BASE_URL}/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`;
	const res = await axios.get(ednpoint);
	return res.data;
};

export const getWeatherData = async (coords) => {
	const ednpoint = `${BASE_URL}/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`;
	const res = await axios.get(ednpoint);
	return res.data;
};
