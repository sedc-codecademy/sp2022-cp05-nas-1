import React, { useState } from 'react';

import { Header, Nav } from './Navbar.styles';
import Hamburger from '../Hamburger/Hamburger';
import SearchBar from '../SearchBar/SearchBar';
import Togglers from '../Togglers/Togglers';
import Logo from '../Logo/Logo';
import UserOptions from '../UserOptions/UserOptions';

function Navbar({ toggleDisplayCategories }) {
	const [displaySearchBar, setDisplaySearchBar] = useState(false);
	const [displayUserOptions, setdisplayUserOptions] = useState(false);

	const toggleDisplaySearchBar = () => {
		setDisplaySearchBar((prev) => !prev);
	};

	const toggleDisplayUserOptions = () => {
		setdisplayUserOptions((prev) => !prev);
	};

	return (
		<Header>
			<Nav id='navbar'>
				<Hamburger toggleDisplayCategories={toggleDisplayCategories} />
				<Logo />
				<SearchBar displaySearchBar={displaySearchBar} toggleDisplaySearchBar={toggleDisplaySearchBar} />
				<Togglers
					toggleDisplaySearchBar={toggleDisplaySearchBar}
					toggleDisplayUserOptions={toggleDisplayUserOptions}
					displayUserOptions={displayUserOptions}
				/>
				<UserOptions displayUserOptions={displayUserOptions} />
			</Nav>
		</Header>
	);
}

export default Navbar;
