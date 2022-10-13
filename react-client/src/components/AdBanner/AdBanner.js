import React from 'react';
import useAds from '../../hooks/useAds';
import { Banner } from './AdBanner.styles';
function AdBanner() {
	const { ads } = useAds();
	const ad = ads[Math.floor(Math.random() * ads.length)];
	if (!ad?.bannerImageUrl) {
		return (
			<Banner>
				<img src='https://wpforms.com/wp-content/uploads/2018/11/ways-to-sell-ad-space-on-your-wordpress-website.jpg'></img>
			</Banner>
		);
	}
	return (
		<Banner href={ad.redirectUrl} target='_blank'>
			<img src={ad.bannerImageUrl} alt='Advertisement' />
		</Banner>
	);
}

export default AdBanner;
