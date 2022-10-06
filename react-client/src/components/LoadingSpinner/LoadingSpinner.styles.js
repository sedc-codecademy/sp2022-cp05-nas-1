import styled from 'styled-components';

export const Spinner = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	margin: 50px auto;
	border: 15px solid var(--primary-color);
	border-left-color: var(--secondary-color);
	border-right-color: var(--secondary-color);
	animation: spinner 1s linear infinite;

	@keyframes spinner {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
