import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin: 20px auto;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 992px) {
		width: 70%;
	}
`;

export const PanelElement = styled.div`
	border: 1px solid black;
	background-color: #f0f0f0;
	:nth-child(even) {
		background-color: #afafaf;
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 15px 20px;

	@media screen and (min-width: 992px) {
		flex-direction: row;
	}

	div {
		display: flex;
		gap: 10px;
		align-items: center;
		button {
			padding: 10px 20px;
			border: none;
			color: #fff;
			font-size: 16px;
		}
		.red {
			background-color: var(--color-red);
		}
		.blue {
			background-color: var(--primary-color);
		}
		.green {
			background-color: var(--color-green);
		}
		input {
			width: 250px;
			height: 30px;
			text-indent: 5px;
		}
		select {
			padding: 10px 20px;
		}
	}
`;

export const PanelForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	@media screen and (min-width: 992px) {
		flex-direction: row;
	}
`;
export const FormOptions = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
	gap: 10px;
	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		input,
		select {
			flex-grow: 1;
		}
	}
`;

export const Details = styled.div`
	display: flex;
	flex-direction: column;
`;
