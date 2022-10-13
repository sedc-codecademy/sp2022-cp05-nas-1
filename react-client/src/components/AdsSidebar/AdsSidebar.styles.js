import styled from 'styled-components';

export const Container = styled.aside`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 25px;
	background-color: var(--background-lightGrey);
	a {
		width: 90%;
	}
	img {
		width: 100%;
		max-height: 25%;
	}

	@media screen and (min-width: 992px) {
		height: 100vh;
		position: sticky;
		top: 70px;
		display: block;
	}
`;
