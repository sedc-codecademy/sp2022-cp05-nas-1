import React, { useState } from 'react';
import { Container } from './Hamburger.styles';
function Hamburger({ toggleDisplaySidebar }) {
	const [toggle, setToggle] = useState(false);
	const handleClick = () => {
		setToggle((prev) => !prev);
		toggleDisplaySidebar();
	};

	return (
		<Container className='hamburger' onClick={handleClick} toggle={toggle ? 1 : 0}>
			<div className='line line-top'></div>
			<div className='line line-middle'></div>
			<div className='line line-bottom'></div>
		</Container>
	);
}

export default Hamburger;
