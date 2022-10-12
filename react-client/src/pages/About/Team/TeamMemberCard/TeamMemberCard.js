import { faGit, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
	Container,
	MemberDescription,
	MemberImage,
	MemberName,
	MemberRole,
	SocialLinks
} from './TeamMemberCard.styles';

function TeamMemberCard({ member }) {
	return (
		<Container>
			<MemberImage src={member.Img} alt='' />
			<MemberName>{member.Name}</MemberName>
			<MemberRole>{member.Role}</MemberRole>
			<MemberDescription>{member.Desc}</MemberDescription>
			<SocialLinks>
				<a href={member.LinkedIn} target='_blank'>
					<FontAwesomeIcon icon={faLinkedin} size='2x' />
				</a>
				<a href={member.Github} target='_blank'>
					<FontAwesomeIcon icon={faGithub} size='2x' />
				</a>
			</SocialLinks>
		</Container>
	);
}

export default TeamMemberCard;
