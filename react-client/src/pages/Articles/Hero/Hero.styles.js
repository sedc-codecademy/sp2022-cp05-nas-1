import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 20px;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	border-bottom: 2px solid #d0d0d0;
	padding-bottom: 20px;
	@media screen and (min-width: 992px) {
		padding: 20px 40px;
	}
`;

export const HeroImage = styled.img`
	width: 90%;
	display: block;
	margin: 0 auto;
	@media screen and (min-width: 992px) {
		height: 500px;
		width: 100%;
		display: block;
	}
`;

export const HeroDetails = styled.div`
	a {
		display: block;
		width: fit-content;
		text-decoration: none;
		background-color: var(--primary-color);
		padding: 10px 20px;
		border-radius: 5px;
		color: #fff;
		margin: 20px auto 0;
	}
`;

export const Title = styled.h2`
	@media screen and (min-width: 992px) {
		font-size: 24px;
		letter-spacing: 3px;
		font-weight: 800;
	}
`;

export const Description = styled.p``;
