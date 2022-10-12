import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 10px;
	margin: 20px 0;
	@media screen and (min-width: 992px) {
		margin: 20px auto;
		width: 50%;
		justify-content: space-evenly;
	}

	a {
		text-decoration: none;
		font-size: 18px;
		background-color: var(--secondary-color);
		padding: 5px 10px;
		color: #fff;
		&.active {
			background-color: var(--primary-color);
			text-decoration: underline;
		}
	}
`;
