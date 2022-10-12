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
		width: 90%;
		align-items: center;
	}
`;

export const SectionContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px;
	gap: 15px;
	@media screen and (min-width: 992px) {
		flex-direction: row;
		:nth-child(even) {
			flex-direction: row-reverse;
		}
	}
`;

export const Content = styled.div``;
