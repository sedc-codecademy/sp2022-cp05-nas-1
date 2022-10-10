import React, { useState } from 'react';
import useCategories from '../../../hooks/useCategories';
import { PanelElement, PanelForm, FormOptions } from '../Panel.styles';

function RssFeedItem({ rssFeed, editFeed, deleteFeed }) {
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
		editFeed(e, updateRssDetails, rssFeed.id);
	};
	const handleDelete = () => {
		deleteFeed(rssFeed.id);
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
					<h2>
						{rssFeed.name} status: {rssFeed.isActive ? 'active' : 'disabled'}
					</h2>
					<div>
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
