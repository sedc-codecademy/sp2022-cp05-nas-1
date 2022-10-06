import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Login.styles';
import LoginForm from '../../components/LoginForm/LoginForm';

function Login() {
	return (
		<Container>
			<h1>Login</h1>
			<LoginForm />
			<h4>
				Dont have an accout? <Link to='signup'>Signup</Link>
			</h4>
		</Container>
	);
}

export default Login;
