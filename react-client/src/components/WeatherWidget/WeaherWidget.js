import React, { useState, useEffect } from 'react';
import {
	CityName,
	Container,
	TopContainer,
	BottomContainer,
	WeatherDescription,
	WeatherIcon,
	Temperature,
	Details,
	ParameterRow,
	ParameterLabel,
	ParameterValue,
	Datetime
} from './WeatherWidget.styles';
import Clock from '../Clock/Clock';
import { getCurrentWeaherData } from '../../api/WeatherAPI';

function WeaherWidget() {
	const [data, setData] = useState();
	const [coords, setCoords] = useState({});
	const date = new Date(Date.now());
	const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(({ coords }) => {
				setCoords(coords);
			});
		}
	}, []);

	useEffect(() => {
		const getData = async () => {
			if (coords?.latitude && coords?.longitude) {
				const data = await getCurrentWeaherData(coords);
				setData(data);
			}
		};
		getData();
	}, [coords]);

	if (data) {
		return (
			<Container>
				<TopContainer>
					<div>
						<CityName className='city'>{data.name}</CityName>
						<WeatherDescription className='weather-description'>{data.weather[0].description}</WeatherDescription>
					</div>
					<WeatherIcon alt='weather' src={`http://openweathermap.org/img/w//${data.weather[0].icon}.png`} />
				</TopContainer>
				<BottomContainer>
					<Temperature className='temperature'>{Math.round(data.main.temp)}°C</Temperature>
					<Details className='details'>
						<ParameterRow>
							<ParameterLabel>Details : </ParameterLabel>
						</ParameterRow>
						<ParameterRow>
							<ParameterLabel>Feels like </ParameterLabel>
							<ParameterValue>{Math.round(data.main.feels_like)}°C</ParameterValue>
						</ParameterRow>
						<ParameterRow>
							<ParameterLabel>Wind</ParameterLabel>
							<ParameterValue>{data.wind.speed} m/s</ParameterValue>
						</ParameterRow>
						<ParameterRow>
							<ParameterLabel>Humidity</ParameterLabel>
							<ParameterValue>{data.main.humidity}%</ParameterValue>
						</ParameterRow>
						<ParameterRow>
							<ParameterLabel>Pressure</ParameterLabel>
							<ParameterValue>{data.main.pressure} hPa</ParameterValue>
						</ParameterRow>
					</Details>
				</BottomContainer>
				<Datetime>
					Date :{' '}
					{` ${WEEK_DAYS[date.getDay()].slice(0, 3)} ${date.getDate()}/${
						date.getMonth() + 1
					}/${date.getFullYear()}`}
				</Datetime>
				<Datetime>
					Time : <Clock />
				</Datetime>
			</Container>
		);
	}
}

export default WeaherWidget;
