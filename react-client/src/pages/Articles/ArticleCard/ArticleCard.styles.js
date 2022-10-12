import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	height: 200px;
	justify-content: center;
	align-items: flex-end;
	@media screen and (min-width: 992px) {
		margin: 10px 5px;
		position: relative;
		justify-content: center;
		align-self: auto;
		padding-bottom: 20px;
		padding-top: 20px;
	}
`;

export const ArticleImage = styled.img`
	width: 140px;
	height: 140px;
	padding-right: 10px;

	@media screen and (min-width: 992px) {
		min-width: 200px;
		padding-right: 10px;
	}
`;

export const ArticleDetails = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
	a {
		width: fit-content;
		background-color: var(--primary-color);
		padding: 10px 20px;
		border-radius: 5px;
		color: #fff;
		font-size: 12px;
		@media screen and (min-width: 992px) {
			font-size: 16px;
		}
	}
	@media screen and (min-width: 992px;) {
		height: 150px;
	}
`;

export const ArticleTitle = styled.h2`
	display: -webkit-box;
	-webkit-line-clamp: 3;
	margin-bottom: 10px;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 15px;
	line-height: 16.6px;
	font-weight: 700;
	letter-spacing: 1.5px;
	padding-bottom: 5px;
	border-bottom: 2px solid rgba(0, 0, 0, 0.2);
	text-indent: 5px;

	@media screen and (min-width: 992px) {
		line-height: 16.6px;
	}
`;

export const ArticleDescription = styled.p`
	font-size: 14px;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	margin-bottom: 10px;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 13px;

	@media screen and (min-width: 992px) {
		font-size: 18px;
		margin-bottom: 10px;
		letter-spacing: 1.8px;
		line-height: 21px;
		font-weight: 300;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
`;
