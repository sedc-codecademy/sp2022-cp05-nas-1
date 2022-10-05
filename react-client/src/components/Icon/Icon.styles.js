import styled from 'styled-components';

export const Container = styled.i`
	display: inline-block;
	mask-size: contain;
	mask-repeat: no-repeat;
	-webkit-mask-size: contain;
	-webkit-mask-repeat: no-repeat;
	width: 30px;
	height: 30px;
	margin: 0 25%;
	mask-image: ${({ icon }) => `url('./assets/icons/${icon}-icon.svg')`};
	-webkit-mask-image: ${({ icon }) => `url('./assets/icons/${icon}-icon.svg')`};
	background-color: ${({ iconColor }) =>
		iconColor === 'blue'
			? 'var(--primary-color)'
			: iconColor === 'black'
			? '#000'
			: iconColor === 'white'
			? '#fff'
			: iconColor === 'red'
			? '#f7473e'
			: '#fff'};
`;
