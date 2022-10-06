import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Input, Container } from './SearchBar.styles';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ displaySearchBar, toggleDisplaySearchBar }) {
	return (
		<Container display={displaySearchBar ? 1 : 0}>
			<button id='close-searchbar' onClick={toggleDisplaySearchBar}>
				<FontAwesomeIcon icon={faX} size='2x'></FontAwesomeIcon>
			</button>
			<Form method='get' action='' role='search' id='express-form' noValidate=''>
				<Input type='search' name='search' placeholder='Search...' id='search-input' />
				<button type='submit'>
					<FontAwesomeIcon icon={faMagnifyingGlass} size='2x'></FontAwesomeIcon>
				</button>
			</Form>
		</Container>
	);
}

export default SearchBar;
