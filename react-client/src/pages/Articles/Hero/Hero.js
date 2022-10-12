import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Description, HeroDetails, HeroImage, Title } from './Hero.styles';
function Hero({ articleData }) {
	return (
		<Container>
			<HeroImage src={articleData.imageUrl} alt={articleData.title} />
			<HeroDetails>
				<Title>{articleData.title}</Title>
				<Description>{articleData.description}</Description>
				<Link to={`/news/article/${articleData.id}`}>Read more</Link>
			</HeroDetails>
		</Container>
	);
}

export default Hero;
