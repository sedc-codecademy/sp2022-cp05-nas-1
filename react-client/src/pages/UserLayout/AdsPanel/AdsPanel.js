import React, { useState } from 'react';
import AdItem from '../../../components/Panel/AdItem/AdItem';
import Panel from '../../../components/Panel/Panel';
import { FormOptions, PanelElement, PanelForm } from '../../../components/Panel/Panel.styles';
import useAdsOptions from '../../../hooks/useAdsOptions';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import Notification from '../../../components/Notification/Notification';
function AdsPanel() {
	const [newAdDetails, setNewAdDetails] = useState({
		adName: '',
		imageUrl: '',
		bannerImageUrl: '',
		redirectUrl: ''
	});
	const { ads, loading, errorMessage, successMessage, createAd, deleteAd, toggleAd, editAd } = useAdsOptions();
	const handleChange = (e) => {
		setNewAdDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleCreate = (e) => {
		createAd(e, newAdDetails);
	};

	if (loading) {
		return <LoadingSpinner />;
	}

	return (
		<>
			<h1>Ads</h1>
			{errorMessage && <Notification type='error' message={errorMessage} />}
			{successMessage && <Notification type='success' message={successMessage} />}
			<Panel>
				<PanelElement>
					<PanelForm onSubmit={handleCreate}>
						<FormOptions>
							<div>
								<label htmlFor='adName'>Ad name :</label>
								<input
									id='adName'
									type='text'
									name='adName'
									value={newAdDetails.adName}
									onChange={handleChange}
									placeholder='Ad name'
								></input>
							</div>
							<div>
								<label htmlFor='imageUrl'>Image url :</label>
								<input
									id='imageUrl'
									type='text'
									name='imageUrl'
									value={newAdDetails.imageUrl}
									onChange={handleChange}
									placeholder='Ad Image url'
								></input>
							</div>
							<div>
								<label htmlFor='bannerImageUrl'>Banner url :</label>
								<input
									id='bannerImageUrl'
									type='text'
									name='bannerImageUrl'
									value={newAdDetails.bannerImageUrl}
									onChange={handleChange}
									placeholder='Ad Banner Image url'
								></input>
							</div>
							<div>
								<label htmlFor='redirectUrl'>Source url :</label>
								<input
									id='redirectUrl'
									type='text'
									name='redirectUrl'
									value={newAdDetails.redirectUrl}
									onChange={handleChange}
									placeholder='Ad source url'
								></input>
							</div>
						</FormOptions>
						<div>
							<button className='green' type='submit'>
								Submit Ad
							</button>
						</div>
					</PanelForm>
				</PanelElement>
				{ads?.length &&
					ads.map((x) => <AdItem key={x.id} ad={x} deleteAd={deleteAd} toggleAd={toggleAd} editAd={editAd} />)}
			</Panel>
		</>
	);
}

export default AdsPanel;
