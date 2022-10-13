import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 10px;
	border: 1px solid var(--secondary-color);

	form {
		margin: 0;
	}
`;

export const Head = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Details = styled.div``;

export const Options = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	button {
		padding: 5px 15px;
		border: none;
		color: #fff;
	}
	.red {
		background-color: var(--color-red);
	}
	.blue {
		background-color: var(--primary-color);
	}
`;

export const Content = styled.p``;
