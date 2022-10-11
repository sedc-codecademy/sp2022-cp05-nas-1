import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Input, Container } from './SearchBar.styles';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function SearchBar({ displaySearchBar, toggleDisplaySearchBar }) {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState('');

	const handleChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const query = searchQuery.replace(' ', '_');
		setSearchQuery('');
		navigate(`/news/search/${query}/page/1`, { replace: true });
	};
	return (
		<Container display={displaySearchBar ? 1 : 0}>
			<button id='close-searchbar' onClick={toggleDisplaySearchBar}>
				<FontAwesomeIcon icon={faX} size='2x'></FontAwesomeIcon>
			</button>
			<Form method='get' action='' role='search' id='express-form' noValidate='' onSubmit={handleSubmit}>
				<Input
					type='search'
					name='search'
					placeholder='Search...'
					id='search-input'
					onChange={handleChange}
					value={searchQuery}
				/>
				<button type='submit'>
					<FontAwesomeIcon icon={faMagnifyingGlass} size='2x'></FontAwesomeIcon>
				</button>
			</Form>
		</Container>
	);
}

export default SearchBar;
