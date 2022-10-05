import React from 'react';
import Icon from '../Icon/Icon';
import { Container } from './Togglers.styles';

function Togglers({ toggleDisplaySearchBar, toggleDisplayUserOptions, displayUserOptions }) {
	return (
		<Container>
			<button id='toggle-user-options' onClick={toggleDisplayUserOptions}>
				<Icon icon={'users'} iconColor={displayUserOptions ? 'red' : 'white'} />
			</button>
			<button id='open-searchbar' onClick={toggleDisplaySearchBar}>
				<Icon icon={'search'} iconColor='white' />
			</button>
		</Container>
	);
}

export default Togglers;
