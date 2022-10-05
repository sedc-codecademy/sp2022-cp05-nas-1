import React from 'react';
import { Container } from './AdsSidebar.styles';
import WeaherWidget from '../WeatherWidget/WeaherWidget';

function AdsSidebar() {
	return (
		<Container>
			<WeaherWidget />
			<a href='#' target='_blank'>
				<img src='https://overstandard.dk/wp-content/uploads/2020/12/5-5.jpg' alt='Advertisement' />
			</a>
			<a href='#' target='_blank'>
				<img src='https://www.somagnews.com/wp-content/uploads/2021/12/Netflix-1.jpg' alt='Advertisement' />
			</a>
		</Container>
	);
}

export default AdsSidebar;
