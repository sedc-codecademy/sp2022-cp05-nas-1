import styled from 'styled-components';

export const Container = styled.footer`
	height: 100px;
	width: 100vw;
	margin-bottom: auto;
	background-color: var(--secondary-color);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	.nav-list {
		list-style: none;
	}

	.nav-list li {
		display: inline;
		padding-right: 10px;
	}

	.nav-list li a {
		text-decoration: none;
		font-size: 14px;
	}

	.copyright p {
		font-size: 14px;
	}

	@media screen and (max-width: 600px) {
		padding: 10px 0px;
		flex-direction: column;

		.copyright {
			order: 2;
		}

		.copyright p {
			font-size: 12px;
		}

		.footer-nav-links {
			order: 1;
		}

		.nav-list {
			list-style: none;
		}

		ul {
			padding-inline-start: 0px;
		}

		.nav-list li {
			display: inline;
			padding-right: 10px;
		}

		.nav-list li a {
			text-decoration: none;
			font-size: 12px;
		}
	}
`;
