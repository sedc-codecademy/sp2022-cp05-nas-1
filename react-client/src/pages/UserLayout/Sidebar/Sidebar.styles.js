import styled from 'styled-components';

export const Container = styled.aside`
	box-sizing: border-box;
	padding: 20px 20px 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	width: 50%;
	background-color: var(--primary-color);
	height: calc(100vh - 70px);
	position: fixed;
	left: 0;
	transform: ${({ displaySidebar }) => (displaySidebar ? 'translateX(0)' : 'translateX(-100%)')};
	transition: transform 250ms ease-in;
	z-index: 20;

	h2 {
		font-size: 24px;
		font-weight: 400;
		letter-spacing: 3px;
	}

	@media screen and (min-width: 992px) {
		position: sticky;
		top: 70px;
		transform: none;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 50px;
		width: 20%;
		margin-top: 30px;
		background-color: var(--background-lightGrey);
		h2 {
			text-align: left;
		}
	}
`;

export const ListItems = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	gap: 20px;
	padding-left: 30px;

	a {
		position: relative;
		padding-left: 8px;
		border-left: 1px solid #fff;
		color: #fff;
		font-size: 20px;
		font-weight: 200;
		letter-spacing: 2px;
		&.active {
			transform: translateX(15px);
			::before {
				content: '';
				position: absolute;
				width: 100%;
				height: 1px;
				background-color: #fff;
				bottom: 0;
				left: 0;
			}
		}
	}
	@media only screen and (min-width: 992px) {
		width: 70%;
		a {
			width: 100%;
			border-left: 2px solid var(--primary-color);
			transition: transform 250ms ease-in;
			color: #000;
			font-size: 22px;
			letter-spacing: 3px;
			font-weight: 300;

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
			&.active {
				transform: translateX(20px);
				::before {
					transform: scaleX(100%);
					height: 2px;
					background-color: var(--primary-color);
				}
			}
		}
	}
`;
