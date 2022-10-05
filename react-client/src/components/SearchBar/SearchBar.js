import React from 'react';

import Icon from '../Icon/Icon';
import { Form, Input, Container } from './SearchBar.styles';
function SearchBar({ displaySearchBar, toggleDisplaySearchBar }) {
	return (
		<Container display={displaySearchBar ? 1 : 0}>
			<button id='close-searchbar' className='btn-icon' onClick={toggleDisplaySearchBar}>
				<Icon icon={'close'} iconColor='black' />
			</button>
			<Form method='get' action='' role='search' id='express-form' noValidate=''>
				<Input type='search' name='search' placeholder='Search...' id='search-input' />
				<button className='search-btn btn-icon' type='submit'>
					<Icon icon='search' iconColor='black' />
				</button>
			</Form>
		</Container>
	);
}

export default SearchBar;
