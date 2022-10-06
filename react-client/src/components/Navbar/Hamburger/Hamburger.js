import React, { useState } from 'react';
import { Container } from './Hamburger.styles';
function Hamburger({ toggleDisplayCategories }) {
	const [toggle, setToggle] = useState(false);
	const handleClick = () => {
		setToggle((prev) => !prev);
		toggleDisplayCategories();
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
