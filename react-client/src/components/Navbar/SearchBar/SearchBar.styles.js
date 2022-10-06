import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: ${({ display }) => (display ? 'flex' : 'none')};
	z-index: 5;

	i {
		width: 50px;
		mask-size: 25px;
	}

	button {
		width: 20%;
		mask-size: 25px;
	}

	@media screen and (min-width: 992px) {
		display: block;
		position: static;
		width: 40%;

		#close-searchbar {
			display: none;
		}
	}
`;

export const Form = styled.form`
	width: 100%;
	display: flex;

	button {
		width: 70px;
	}
	@media screen and (min-width: 992px) {
		position: relative;
		button {
			position: absolute;
			background-color: transparent;
			border: none;
			right: 20px;
			top: 10px;
		}
	}
`;

export const Input = styled.input`
	height: 100%;
	flex-grow: 1;
	width: 60%;
	text-indent: 10px;
	font-size: 24px;
	-webkit-appearance: textfield;
	@media screen and (min-width: 992px) {
		border-radius: 50px;
		text-indent: 30px;
		border: none;
		height: 50px;
		:focus {
			outline: 2px solid var(--secondary-color);
		}
	}
`;
