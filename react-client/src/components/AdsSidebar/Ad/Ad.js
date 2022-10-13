import React from 'react';
import useAds from '../../../hooks/useAds';
import { Container } from '../../Panel/Panel.styles';
function Ad() {
	const { ads } = useAds();
	const ad = ads[Math.floor(Math.random() * ads.length)];
	if (!ad?.imageUrl) {
		return (
			<img
				src='https://growtraffic-bc85.kxcdn.com/blog/wp-content/uploads/2016/10/Sell-Ads-on-a-Website.jpg'
				alt='space for your ad'
			/>
		);
	}
	return (
		<a href={ad.redirectUrl} target='_blank'>
			<img src={ad.imageUrl} alt='Advertisement' />
		</a>
	);
}

export default Ad;
