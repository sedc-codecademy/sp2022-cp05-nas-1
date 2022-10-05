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
	transform: ${({ displayCategories }) => (displayCategories ? 'translateX(0)' : 'translateX(-100%)')};
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
		width: 100%;
		background-color: var(--background-lightGrey);

		h2 {
			text-align: left;
		}
	}
`;

export const ListItems = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	gap: 20px;
	padding-left: 30px;

	@media only screen and (min-width: 992px) {
		width: 70%;
	}
`;

export const Links = styled.div`
	margin-top: auto;
	margin-bottom: 50px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-style: italic;
`;
