import styled from 'styled-components';

export const Container = styled.p`
	display: ${({ focused, isValid }) => (focused && !isValid ? 'block' : 'none')};
	padding: 5px 10px;
	background-color: var(--yellowPrimary);
	font-size: 15px;
`;
