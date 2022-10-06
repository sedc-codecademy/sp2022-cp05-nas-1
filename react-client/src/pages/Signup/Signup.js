import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Signup.styles';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import useRegister from '../../hooks/useRegister';
import Notification from '../../components/Notification/Notification';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
function Signup() {
	const { loading, success, errorMessage, registerDetails, setRegisterDetails, register } = useRegister();

	if (loading) {
		return <LoadingSpinner />;
	}

	if (success) {
		return (
			<Container>
				<h1>Successfully registered</h1>
				<h2>
					Log in <Link to={'/login'}>Here</Link>
				</h2>
			</Container>
		);
	}
	return (
		<Container>
			{errorMessage && <Notification type='error' message={errorMessage} />}

			<h1>Signup</h1>
			<RegisterForm registerDetails={registerDetails} setRegisterDetails={setRegisterDetails} register={register} />
			<h4>
				Already have an accout? <Link to='/login'>Login</Link>
			</h4>
		</Container>
	);
}

export default Signup;
