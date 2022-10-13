import styled from 'styled-components';

export const Wrapper = styled.div`
	position: sticky;
	background-color: ${({ type }) =>
		type === 'error'
			? 'var(--color-red)'
			: type === 'success'
			? 'var(--color-green)'
			: 'grey'}; //<- TODO :change default color
	color: #fff;
	width: fit-content;
	padding: 10px 30px;
	border: 3px solid black;
	border-radius: 25px;
	margin-left: auto;
	margin-right: 50px;
	top: 100px;
	z-index: 50;
`;
