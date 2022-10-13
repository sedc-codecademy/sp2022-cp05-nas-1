import styled from 'styled-components';

export const ArticleInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 20px 0;
	width: 100%;
	gap: 10px;
	border-bottom: 1px solid var(--secondary-color);
	padding-bottom: 10px;
`;
export const ArticleTitle = styled.h1``;
export const ArticleImage = styled.img`
	height: 200px;
	@media screen and (min-width: 992px) {
		height: 400px;
	}
`;
export const ArticleDetails = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-evenly;
	background-color: var(--primary-color);
	padding: 20px 0;
	color: #fff;
	.original-source {
		background-color: var(--color-red);
		color: #fff;
		padding: 10px;
		border-radius: 5px;
	}
`;
export const ArticleDescription = styled.div`
	font-size: 18px;
	white-space: pre-line;
	p {
		margin-bottom: 20px;
	}
	h2 {
		width: fit-content;
		padding-right: 20px;
		border-bottom: 1px solid #d0d0d0;
	}
`;

export const Message = styled.h3`
	button {
		border: none;
		padding: 5px 10px;
		background-color: var(--color-red);
		color: #fff;
		border-radius: 5px;
	}
`;
