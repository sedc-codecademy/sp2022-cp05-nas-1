import styled from 'styled-components';

export const Header = styled.header`
	width: 100vw;
	height: 70px;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 100;
`;

export const Nav = styled.nav`
	padding: 15px 35px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	background-color: var(--primary-color);
	box-shadow: 0px 0px 5px 0px;

	@media screen and (min-width: 992px) {
		justify-content: space-around;
	}
`;
