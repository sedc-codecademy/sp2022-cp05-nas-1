import React, { useState } from 'react';
import useCategories from '../../../hooks/useCategories';
import { PanelElement, PanelForm, FormOptions, Details } from '../Panel.styles';

function RssFeedItem({ rssFeed, editFeed, deleteFeed, toggleFeedActive }) {
	const { categories } = useCategories();
	const [isEdditing, setIsEdditing] = useState(false);
	const [updateRssDetails, setUpdateRssDetils] = useState({
		name: rssFeed.name,
		feedUrl: rssFeed.feedUrl,
		categoryId: rssFeed.category.id
	});

	const handleChange = (e) => {
		setUpdateRssDetils((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const toggleIsEdditing = () => {
		setIsEdditing((prev) => !prev);
	};
	const handleEdit = (e) => {
		const category = categories.find((x) => x.id === parseInt(updateRssDetails.categoryId));
		editFeed(e, updateRssDetails, rssFeed.id, category);
	};
	const handleDelete = () => {
		deleteFeed(rssFeed.id);
	};

	const handleToggle = () => {
		toggleFeedActive(rssFeed.id);
	};
	return (
		<>
			{isEdditing ? (
				<PanelElement>
					<PanelForm onSubmit={handleEdit}>
						<FormOptions>
							<div>
								<label htmlFor='rssName'>Rss Feed name :</label>
								<input
									id='rssName'
									type='text'
									name='name'
									value={updateRssDetails.name}
									onChange={handleChange}
									placeholder='ex : Fox news - Sport'
								></input>
							</div>
							<div>
								<label htmlFor='rssUrl'>Rss Feed URL :</label>
								<input
									id='rssUrl'
									type='text'
									name='feedUrl'
									value={updateRssDetails.feedUrl}
									onChange={handleChange}
									placeholder='ex : https://moxie.foxnews.com/google-publisher/sports.xml '
								></input>
							</div>
							<div>
								<label htmlFor='rssCategory'>Category :</label>
								<select
									id='rssCategory'
									name='categoryId'
									value={updateRssDetails.categoryId}
									defaultChecked={rssFeed.categoryId}
									onChange={handleChange}
								>
									{categories.map((x) => {
										return (
											<option key={x.id} value={x.id} selected={x.id === rssFeed.category.id}>
												{x.name}
											</option>
										);
									})}
								</select>
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
						<h2>{rssFeed.name}</h2>
						<h4>Feed url : {rssFeed.feedUrl}</h4>
						<h4>status: {rssFeed.isActive ? 'active' : 'disabled'}</h4>
					</Details>
					<div>
						<button className={rssFeed.isActive ? 'red' : 'green'} onClick={handleToggle}>
							{rssFeed.isActive ? 'disable' : 'enable'}
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

export default RssFeedItem;
