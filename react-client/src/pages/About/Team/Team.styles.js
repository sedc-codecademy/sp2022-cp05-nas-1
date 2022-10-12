import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	text-align: center;
	margin: 50px auto;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;

	@media screen and (min-width: 992px) {
		flex-direction: row;
		align-items: center;
	}
`;
