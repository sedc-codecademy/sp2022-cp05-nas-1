import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
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
	right: 50px;
	top: 100px;
`;
