import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 820px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 992px) {
		flex-direction: row;
	}
`;

export const ContactInfo = styled.div`
	padding: 2.3rem 25px 30px 25px;
	position: relative;
`;

export const Info = styled.div`
	width: 100%;
	display: flex;
	color: #555;
	align-items: center;
	font-size: 18px;
	gap: 15px;
	padding-top: 15px;
`;

export const SocialMedia = styled.div`
	display: flex;
	gap: 15px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	div {
		display: flex;
		gap: 20px;

		svg {
			transition: all 200ms ease;
			:hover {
				transform: scale(1.5);
				color: var(--primary-color);
			}
		}
	}
`;
