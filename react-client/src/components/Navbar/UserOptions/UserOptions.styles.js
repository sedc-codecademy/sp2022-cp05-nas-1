import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	padding-top: 50px;
	right: 0;
	top: 70px;
	background-color: var(--primary-color);
	width: 100%;
	height: calc(100vh - 70px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	border-top: 2px solid var(--secondary-color);
	gap: 50px;
	transform: ${({ displayUserOptions }) => (displayUserOptions ? 'translateX(0)' : 'translateX(100%)')};
	transition: transform 300ms ease;

	@media screen and (min-width: 992px) {
		position: static;
		transform: none;
		height: fit-content;
		width: fit-content;
		padding-top: 0;
		border: none;
		display: flex;
		flex-direction: row;
	}
`;

export const Button = styled.button`
	width: 50%;
	text-align: center;
	padding: 20px 0;
	border-radius: 10px;
	font-size: 24px;
	letter-spacing: 2px;
	cursor: pointer;
	font-weight: 300;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 10px;
	position: relative;

	background-color: ${({ color }) => (color === 'primary' ? '#fff' : '#f7473e')};
	color: ${({ color }) => (color === 'primary' ? 'var(--primary-color)' : '#fff')};

	&:after {
		position: absolute;
		top: -21px;
		left: 10px;
		color: #fafafa;
		font-size: 16px;
		font-weight: 200;
		content: '${({ smallText }) => smallText}';
	}

	i {
		margin: 0;
		padding: 0;
	}

	@media screen and (min-width: 992px) {
		width: 130px;
		padding: 10px 20px;
		display: flex;
		position: relative;
		::after {
			display: none;
		}

		::before {
			position: absolute;
			content: '';
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: 10px;
			background-color: rgba(0, 0, 0, 0.2);
			transform: scaleX(0);
			transition: transform 200ms ease-in;
			transform-origin: right;
		}
		:hover::before {
			transform: scaleX(100%);
			transform-origin: left;
		}
	}
`;
