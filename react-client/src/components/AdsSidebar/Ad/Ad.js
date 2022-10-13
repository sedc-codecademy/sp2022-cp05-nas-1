import React from 'react';
import useAds from '../../../hooks/useAds';
function Ad() {
	const { ads } = useAds();
	const ad = ads[Math.floor(Math.random() * ads.length)];
	return (
		<a href={ad.redirectUrl} target='_blank'>
			<img src={ad.imageUrl} alt='Advertisement' />
		</a>
	);
}

export default Ad;
