import React from 'react';
import { Container } from './Togglers.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';

function Togglers({ toggleDisplaySearchBar, toggleDisplayUserOptions, displayUserOptions }) {
	return (
		<Container>
			<button id='toggle-user-options' onClick={toggleDisplayUserOptions}>
				<FontAwesomeIcon icon={faUsers} size='2x' color={displayUserOptions ? '#f7473e' : 'white'} />
			</button>
			<button id='open-searchbar' onClick={toggleDisplaySearchBar}>
				<FontAwesomeIcon icon={faMagnifyingGlass} size='2x' color='white' />
			</button>
		</Container>
	);
}

export default Togglers;
