import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	main {
		padding: 30px 20px;
		display: flex;
		flex-flow: column nowrap;
		flex: 100% 4 0;
	}
	aside {
		flex: 20% 1 1;
	}

	@media screen and (min-width: 992px) {
		flex-direction: row;
		align-items: flex-start;
		main {
			width: 60%;
			flex: 60% 4 0;
		}
	}
`;
