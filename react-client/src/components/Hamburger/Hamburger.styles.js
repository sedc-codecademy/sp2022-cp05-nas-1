import styled from 'styled-components';

export const Container = styled.div`
	height: 40px;
	left: 20px;
	vertical-align: middle;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	cursor: pointer;

	.line {
		height: 3px;
		width: 35px;
		background-color: white;
		transition: transform 300ms linear, opacity 300ms linear;
	}

	.line-top {
		transform: ${({ toggle }) => (toggle === 1 ? 'rotate(-45deg) translate(-9px, 10px)' : 'rotate(0) translate(0)')};
	}
	.line-middle {
		opacity: ${({ toggle }) => (toggle === 1 ? '0' : '1')};
	}
	.line-bottom {
		transform: ${({ toggle }) => (toggle === 1 ? 'rotate(45deg) translate(-9px, -10px)' : 'rotate(0) translate(0)')};
	}

	@media screen and (min-width: 992px) {
		display: none;
	}
`;
