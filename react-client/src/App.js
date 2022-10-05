import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';
import Layout from './pages/Layout/Layout';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Footer from './components/Footer/Footer';
function App() {
	const [displayCategories, setDisplayCategories] = useState(false);
	const toggleDisplayCategories = () => {
		setDisplayCategories((prev) => !prev);
	};
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
