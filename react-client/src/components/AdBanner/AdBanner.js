import React from 'react';
import useAds from '../../hooks/useAds';
import { Banner } from './AdBanner.styles';
function AdBanner() {
	const { ads } = useAds();
	const ad = ads[Math.floor(Math.random() * ads.length)];
	return (
		<Banner href={ad.redirectUrl} target='_blank'>
			<img src={ad.bannerImageUrl} alt='Advertisement' />
		</Banner>
	);
}

export default AdBanner;
