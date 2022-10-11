import React, { useEffect, useState } from 'react';
import Notification from '../../../components/Notification/Notification';
import Panel from '../../../components/Panel/Panel';
import { PanelElement, PanelForm, FormOptions } from '../../../components/Panel/Panel.styles';
import RssFeedItem from '../../../components/Panel/RssFeedItem/RssFeedItem';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import useCategories from '../../../hooks/useCategories';
import useRssOptions from '../../../hooks/useRssOptions';

function RssFeedPanel() {
	const { categories } = useCategories();
	const [newRssDetails, setNewRssDetails] = useState({
		name: '',
		feedUrl: '',
		categoryId: categories[0].id
	});
	const { rssFeeds, loading, successMessage, errorMessage, editFeed, deleteFeed, createFeed, toggleFeedActive } =
		useRssOptions();

	const handleChange = (e) => {
		setNewRssDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleCreate = (e) => {
		const category = categories.find((x) => x.id === parseInt(newRssDetails.categoryId));
		createFeed(e, newRssDetails, category);
		setNewRssDetails({
			name: '',
			feedUrl: '',
			categoryId: categories[0].id
		});
	};

	useEffect(() => {
		setNewRssDetails({
			name: '',
			feedUrl: '',
			categoryId: categories[0].id
		});
	}, [categories]);

	if (loading) {
		return <LoadingSpinner />;
	}
	return (
		<>
			<h1>Rss Feeds</h1>

			{errorMessage && <Notification type='error' message={errorMessage} />}
			{successMessage && <Notification type='success' message={successMessage} />}
			<Panel>
				<PanelElement>
					<PanelForm onSubmit={handleCreate}>
						<FormOptions>
							<div>
								<label htmlFor='rssName'>Rss Feed name :</label>
								<input
									id='rssName'
									type='text'
									name='name'
									value={newRssDetails.name}
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
									value={newRssDetails.feedUrl}
									onChange={handleChange}
									placeholder='ex : https://moxie.foxnews.com/google-publisher/sports.xml '
								></input>
							</div>
							<div>
								<label htmlFor='rssCategory'>Category :</label>
								<select
									id='rssCategory'
									name='categoryId'
									onChange={handleChange}
									value={newRssDetails.categoryId}
								>
									{categories.map((x) => (
										<option key={x.id} value={x.id}>
											{x.name}
										</option>
									))}
								</select>
							</div>
						</FormOptions>
						<div>
							<button className='green' type='submit'>
								Submit new Rss Feed
							</button>
						</div>
					</PanelForm>
				</PanelElement>
				{rssFeeds?.length &&
					rssFeeds.map((x) => (
						<RssFeedItem
							key={x.id}
							rssFeed={x}
							editFeed={editFeed}
							deleteFeed={deleteFeed}
							toggleFeedActive={toggleFeedActive}
						/>
					))}
			</Panel>
		</>
	);
}

export default RssFeedPanel;
