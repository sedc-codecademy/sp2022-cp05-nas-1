import { useContext } from 'react';
import AdsContext from '../context/AdsProvider';

const useAds = () => {
	return useContext(AdsContext);
};

export default useAds;
