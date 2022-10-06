import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Container } from './UserDetails.styles';
function UserDetails() {
	const { auth } = useAuth();
	return (
		<>
			<h1>UserDetails</h1>
			<Container>
				<p>
					First name :<span> {auth.firstName}</span>
				</p>
				<p>
					Last name : <span>{auth.firstName}</span>
				</p>
				<p>
					Username:<span> {auth.username}</span>
				</p>
				<p>
					Email: <span>{auth.email}</span>
				</p>
			</Container>
		</>
	);
}

export default UserDetails;
