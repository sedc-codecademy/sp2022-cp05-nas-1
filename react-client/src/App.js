import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';
import Layout from './pages/Layout/Layout';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Footer from './components/Footer/Footer';
import useAuth from './hooks/useAuth';
function App() {
	const { setAuth } = useAuth();
	const [displayCategories, setDisplayCategories] = useState(false);
	const toggleDisplayCategories = () => {
		setDisplayCategories((prev) => !prev);
	};

	useEffect(() => {
		const userData = localStorage.getItem('authUser');
		const today = new Date();
		if (userData) {
			const data = JSON.parse(userData);
			if (today > data.expirationDate) {
				localStorage.clear();
			} else {
				setAuth(data);
			}
		}
	}, [setAuth]);

	return (
		<>
			<Navbar toggleDisplayCategories={toggleDisplayCategories} />
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<Layout displayCategories={displayCategories} />}>
					<Route path='/' element={<Home />}></Route>
				</Route>

				{/* LOGIN / REGISTER ROUTES */}
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
