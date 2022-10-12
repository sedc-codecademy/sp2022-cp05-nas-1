import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	height: 600px;
	padding: 22px;
	width: 100%;
	cursor: pointer;
	transition: 0.4s;
	box-shadow: 0 10px 12px -12px #333;
	@media screen and (min-width: 992px) {
		width: 30%;
	}
`;

export const MemberImage = styled.img`
	max-width: 300px;
	min-width: 100px;
	height: 250px;
	margin: 0 auto;
	border-radius: 50px;
`;

export const MemberName = styled.h3`
	color: #333;
	font-size: 24px;
	font-weight: 600;
	letter-spacing: 1.3px;
	margin-top: 8px;
`;

export const MemberRole = styled.div`
	font-size: 18px;
	font-style: italic;
	color: #888;
	font-weight: 200;
`;

export const MemberDescription = styled.div`
	font-size: 17px;
	font-weight: 300;
	color: #4e4e4e;
`;

export const SocialLinks = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	justify-content: center;
	margin-top: auto;

	a {
		color: #444;
		display: inline-block;
		height: 30px;
		width: 30px;
		transition: 0.4s;
		:hover {
			transform: scale(1.5);
		}
	}
`;
