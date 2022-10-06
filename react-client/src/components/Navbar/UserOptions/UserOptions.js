import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Container, Button } from './UserOptions.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faUser, faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

function UserOptions({ displayUserOptions, setdisplayUserOptions }) {
	const { auth, setAuth } = useAuth();

	const logout = () => {
		setAuth({});
		localStorage.clear();
		handleClick();
	};
	const handleClick = () => {
		setdisplayUserOptions(false);
	};

	if (auth.token && auth.isAdmin) {
		return (
			<Container id='user-options' displayUserOptions={displayUserOptions}>
				<Button as={Link} to='/adminpanel/details' color='primary' smallText={'admin panel'} onClick={handleClick}>
					Panel
					<FontAwesomeIcon icon={faTable}></FontAwesomeIcon>
				</Button>
				<Button as={Link} to='/' color='secondary' smallText={'logout'} onClick={logout}>
					Logout
					<FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
				</Button>
			</Container>
		);
	}

	if (auth.token && !auth.isAdmin) {
		return (
			<Container id='user-options' displayUserOptions={displayUserOptions}>
				<Button
					as={Link}
					to='/user/details'
					color='primary'
					smallText={`Signed in as : ${auth.username}`}
					onClick={handleClick}
				>
					Profile
					<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
				</Button>
				<Button as={Link} to='/' color='secondary' smallText={'logout'} onClick={logout}>
					Logout
					<FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
				</Button>
			</Container>
		);
	}

	return (
		<Container id='user-options' displayUserOptions={displayUserOptions}>
			<Button as={Link} to='/login' color='primary' smallText={'Already have an accout?'} onClick={handleClick}>
				Login
				<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
			</Button>
			<Button as={Link} to='/signup' color='secondary' smallText={'Welcome new users!'} onClick={handleClick}>
				Signup
				<FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
			</Button>
		</Container>
	);
}

export default UserOptions;
