import styled from 'styled-components';

export const Container = styled.div`
	background-color: var(--secondary-color);
	color: white;
	/* height: 270px; */
	width: 80%;
	padding: 5px;
	border-radius: 20px;
	margin: 15px auto;

	@media screen and (min-width: 992px) {
		width: 90%;
	}
`;

export const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const BottomContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CityName = styled.p`
	font-weight: 600;
	font-size: 18px;
	line-height: 1;
	margin: 0;
	letter-spacing: 1px;
`;

export const WeatherDescription = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 1;
	margin: 0;
`;

export const WeatherIcon = styled.img`
	width: 100px;
`;

export const Temperature = styled.p`
	font-weight: 600;
	font-size: 50px;
	width: auto;
	letter-spacing: -5px;
	margin: 10px 0;
`;

export const Details = styled.div`
	width: 100%;
	padding-left: 20px;
`;

export const ParameterRow = styled.div`
	margin: 0 auto;
	width: 80%;
	display: flex;
	justify-content: space-between;
`;

export const ParameterLabel = styled.span`
	text-align: left;
	font-weight: 400;
	font-size: 14px;
`;

export const ParameterValue = styled.span`
	text-align: right;
	font-weight: 600;
	font-size: 14px;
`;

export const Datetime = styled.p`
	margin-top: 10px;
	margin-left: 10px;
`;
