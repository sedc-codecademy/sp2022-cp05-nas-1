import styled from 'styled-components';

export const Container = styled.form`
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 15px;
	width: 90%;
	margin: 0 auto;

	button[type='submit'] {
		width: 50%;
		padding: 10px 0;
		margin: 0 auto;
		background-color: var(--primary-color);
		border-radius: 10px;
		border: none;
		color: #fff;
		font-size: 18px;
		letter-spacing: 2px;
		transition: all 200ms ease;

		:hover {
			transform: translateY(-2px);
			box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.5);
		}
	}

	@media screen and (min-width: 992px) {
		width: 50%;
	}
`;
