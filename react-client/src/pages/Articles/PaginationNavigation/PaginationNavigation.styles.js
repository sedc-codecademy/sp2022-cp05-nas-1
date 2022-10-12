import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;

export const Button = styled.button`
	padding: 10px 20px;
	background-color: var(--primary-color);
	color: #fff;
	border: none;
	border-radius: 5px;

	@media screen and (min-width: 992px) {
		padding: 10px 30px;
	}
`;
