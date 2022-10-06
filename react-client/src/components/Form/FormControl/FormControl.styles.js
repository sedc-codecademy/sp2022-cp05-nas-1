import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 2px;
	label {
		margin-left: 20px;
		font-size: 18px;
		svg {
			margin-right: 10px;
		}
	}

	input {
		width: 100%;
		height: 30px;
		border-radius: 5px;
		text-indent: 10px;
		border: 1px solid var(--secondary-color);

		:focus {
			outline: 2px solid var(--primary-color);
			border: none;
		}
	}
`;
