import React from 'react';
import { Container } from './AdsSidebar.styles';
import WeaherWidget from '../WeatherWidget/WeaherWidget';
import Ad from './Ad/Ad';

function AdsSidebar() {
	return (
		<Container>
			<WeaherWidget />
			<Ad />
			<Ad />
		</Container>
	);
}

export default AdsSidebar;
