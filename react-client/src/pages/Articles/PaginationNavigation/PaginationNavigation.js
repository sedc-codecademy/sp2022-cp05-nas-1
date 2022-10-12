import React from 'react';

import { Container, Button } from './PaginationNavigation.styles';
import { useLocation, useNavigate } from 'react-router-dom';

function PaginationNavigation({ next, previous, maxPage, currentPage }) {
	const location = useLocation();
	const navigate = useNavigate();
	const filteredLocation = location.pathname.slice(0, location.pathname.lastIndexOf('/'));

	const navigateToNext = () => {
		navigate(`${filteredLocation}/${next}`);
	};
	const navigateToPrevious = () => {
		navigate(`${filteredLocation}/${previous}`);
	};
	const navigateToFirst = () => {
		navigate(`${filteredLocation}/1`);
	};
	const navigateToLast = () => {
		navigate(`${filteredLocation}/${maxPage}`);
	};

	return (
		<Container>
			{previous && (
				<>
					<Button onClick={navigateToFirst}>First page</Button>
					<Button onClick={navigateToPrevious}>Previous page</Button>
				</>
			)}
			{next && <Button onClick={navigateToNext}>Next page</Button>}
			{maxPage > 2 && maxPage !== parseInt(currentPage) && <Button onClick={navigateToLast}>Last page</Button>}
		</Container>
	);
}

export default PaginationNavigation;
