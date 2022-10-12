import React from 'react';
import { Container, Content, SectionContainer } from './Newstopia.styles';

function Newstopia() {
	return (
		<Container class='section'>
			<SectionContainer class='section-container'>
				<div class='columns image'>
					<img src='../../assets/images/team.jpg' alt='team' width='400px' height='300px' />
				</div>
				<Content class='columns content'>
					<div class='content-container'>
						<h2>Who we are</h2>
						<p>
							Everyone says it, but in our case it is true: our team is the secret to our success. Each and every
							one of us is amazing in their own way, but together we make our job easier. Our team is a talented
							group of people with outstanding offers for our clients, and it is a fun and challenging place to
							work and develop a career as well. We are very proud of the team and we have always been a team
							that sticks together, with a shared vision and passion for helping ourselves to be the best we can
							be for our clients.
						</p>
					</div>
				</Content>
			</SectionContainer>
			<SectionContainer class='section-container'>
				<div class='columns image'>
					<img src='../../assets/images/great-team.jpg' alt='team' width='400px' height='300px' />
				</div>
				<div class='columns content'>
					<div class='content-container'>
						<h2>What we do ?</h2>
						<p>
							Front-end web development is the development of the graphical user interface of a website, through
							the use of HTML, CSS, and JavaScript, so that users can view and interact with that website. We
							created website for news, the name is newstopia. Our team counts eleven members and the outcome is
							excellent.
						</p>
					</div>
				</div>
			</SectionContainer>
		</Container>
	);
}

export default Newstopia;
