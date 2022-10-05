import styled from 'styled-components';

export const Container = styled.li`
	padding-left: 8px;
	border-left: 1px solid #fff;
	cursor: pointer;

	a {
		color: #fff;
		font-size: 20px;
		font-weight: 200;
		letter-spacing: 2px;
	}

	@media only screen and (min-width: 992px) {
		width: 100%;
		position: relative;
		border-left: 2px solid var(--primary-color);
		transition: transform 250ms ease-in;

		a {
			color: #000;
			font-size: 22px;
			letter-spacing: 3px;
			font-weight: 300;
		}
	}

	::before {
		position: absolute;
		content: '';
		width: 100%;
		height: 2px;
		background-color: var(--primary-color);
		bottom: 0;
		left: 0;
		z-index: 1;
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 250ms ease-in;
	}

	:hover {
		transform: translateX(20px);
	}
	:hover::before {
		transform: scaleX(100%);
		transform-origin: left;
	}
`;
