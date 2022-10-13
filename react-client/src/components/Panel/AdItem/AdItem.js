import React, { useState } from 'react';
import { Details, FormOptions, PanelElement, PanelForm } from '../Panel.styles';

function AdItem({ ad, deleteAd, toggleAd, editAd }) {
	const [isEditing, setIsEdditing] = useState(false);
	const [updateAdDetails, setUpdateAdDetails] = useState({
		adName: ad.adName,
		imageUrl: ad.imageUrl,
		bannerImageUrl: ad.bannerImageUrl,
		redirectUrl: ad.redirectUrl
	});

	const handleChange = (e) => {
		setUpdateAdDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleToggle = () => {
		toggleAd(ad.id);
	};
	const handleEdit = (e) => {
		editAd(e, updateAdDetails, ad.id);
	};
	const handleDelete = () => {
		deleteAd(ad.id);
	};

	const toggleIsEdditing = () => {
		setIsEdditing((prev) => !prev);
	};

	return (
		<>
			{isEditing ? (
				<PanelElement>
					<PanelForm onSubmit={handleEdit}>
						<FormOptions>
							<div>
								<label htmlFor='adName'>Ad name:</label>
								<input
									id='adName'
									type='text'
									name='adName'
									value={updateAdDetails.adName}
									onChange={handleChange}
									placeholder='Ad name'
								></input>
							</div>
							<div>
								<label htmlFor='imageUrl'>Image url:</label>
								<input
									id='imageUrl'
									type='text'
									name='imageUrl'
									value={updateAdDetails.imageUrl}
									onChange={handleChange}
									placeholder='Image url'
								></input>
							</div>
							<div>
								<label htmlFor='bannerImageUrl'>Banner url:</label>
								<input
									id='bannerImageUrl'
									type='text'
									name='bannerImageUrl'
									value={updateAdDetails.bannerImageUrl}
									onChange={handleChange}
									placeholder='Banner url'
								></input>
							</div>
							<div>
								<label htmlFor='redirectUrl'>Source url:</label>
								<input
									id='redirectUrl'
									type='text'
									name='redirectUrl'
									value={updateAdDetails.redirectUrl}
									onChange={handleChange}
									placeholder='Source url'
								></input>
							</div>
						</FormOptions>
						<div>
							<button className='blue' type='submit'>
								Save
							</button>
							<button className='red' onClick={toggleIsEdditing}>
								Cancel
							</button>
						</div>
					</PanelForm>
				</PanelElement>
			) : (
				<PanelElement>
					<Details>
						<h2>{ad.adName}</h2>
						<h4>Ad url : {ad.redirectUrl}</h4>
						<h4>status: {ad.isAdActive ? 'active' : 'disabled'}</h4>
					</Details>
					<div>
						<button className={ad.isAdActive ? 'red' : 'green'} onClick={handleToggle}>
							{ad.isAdActive ? 'disable' : 'enable'}
						</button>
						<button className='blue' onClick={toggleIsEdditing}>
							Edit
						</button>
						<button className='red' onClick={handleDelete}>
							Delete
						</button>
					</div>
				</PanelElement>
			)}
		</>
	);
}

export default AdItem;
