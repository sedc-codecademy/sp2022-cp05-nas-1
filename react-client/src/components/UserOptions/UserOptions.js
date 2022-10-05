import React from 'react';
import Icon from '../Icon/Icon';
import { Link } from 'react-router-dom';
import { Container, Button } from './UserOptions.styles';
function UserOptions({ displayUserOptions }) {
	return (
		<Container id='user-options' displayUserOptions={displayUserOptions}>
			<Button as={Link} to='/login' color='primary' option='login'>
				Login
				<Icon icon='login' iconColor='blue' />
			</Button>
			<Button as={Link} to='/signup' color='secondary' option='signup'>
				Signup <Icon icon='signup' iconColor='white' />
			</Button>
		</Container>
	);
}

export default UserOptions;
