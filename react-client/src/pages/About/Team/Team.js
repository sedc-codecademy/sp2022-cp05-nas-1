import React from 'react';
import teamMembers from '../../../static/team';
import { Container } from './Team.styles';
import TeamMemberCard from './TeamMemberCard/TeamMemberCard';

function Team() {
	return (
		<Container>
			{teamMembers.map((x) => (
				<TeamMemberCard key={x.Name} member={x} />
			))}
		</Container>
	);
}

export default Team;
