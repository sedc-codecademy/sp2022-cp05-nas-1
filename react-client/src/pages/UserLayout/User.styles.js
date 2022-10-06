import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	aside {
		flex: 20% 1 1;
	}
	main {
		margin-top: 20px;
		padding: 20px;
		width: 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media screen and (min-width: 992px) {
		width: 80%;
	}
`;
