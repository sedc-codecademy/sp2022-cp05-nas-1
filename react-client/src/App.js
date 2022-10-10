import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import { GlobalStyle } from './GlobalStyles';
import Layout from './pages/Layout/Layout';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import UserLayout from './pages/UserLayout/UserLayout';
import Signup from './pages/Signup/Signup';
import Footer from './components/Footer/Footer';

import Unauthorized from './pages/Unauthorized/Unauthorized';
import UserDetails from './pages/UserLayout/UserDetails/UserDetails';
import UpdateUser from './pages/UserLayout/UpdateUser/UpdateUser';
import ChangePassword from './pages/UserLayout/ChangePassword/ChangePassword';
import RequireAuth from './components/RequireAuth/RequireAuth';
import RegisterAdmin from './pages/UserLayout/RegisterAdmin/RegisterAdmin';
import CategoriesPanel from './pages/UserLayout/CategoriesPanel/CategoriesPanel';
import RssFeedPanel from './pages/UserLayout/RssFeedPanel/RssFeedPanel';
import UsersPanel from './pages/UserLayout/UsersPanel/UsersPanel';
function App() {
	const { auth, setAuth } = useAuth();
	const [displaySidebar, setDisplaySidebar] = useState(false);
	const toggleDisplaySidebar = () => {
		setDisplaySidebar((prev) => !prev);
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
			<Navbar toggleDisplaySidebar={toggleDisplaySidebar} />
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<Layout displayCategories={displaySidebar} />}>
					<Route path='/' element={<Home />} />
					<Route path='/unauthorized' element={<Unauthorized />} />
				</Route>
				{/* USER ROUTES */}
				<Route path='/user' element={<RequireAuth allowedRole='user' />}>
					<Route
						path='/user'
						element={<UserLayout displaySidebar={displaySidebar} setDisplaySidebar={setDisplaySidebar} />}
					>
						<Route path='/user/details' element={<UserDetails />} />
						<Route path='/user/changeInformation' element={<UpdateUser />} />
						<Route path='/user/changePassword' element={<ChangePassword />} />
					</Route>
				</Route>
				{/* ADMIN ROUTES */}
				<Route path='/adminpanel' element={<RequireAuth allowedRole='admin' />}>
					<Route
						path='/adminpanel'
						element={<UserLayout displaySidebar={displaySidebar} setDisplaySidebar={setDisplaySidebar} />}
					>
						<Route path='/adminpanel/details' element={<UserDetails />} />
						<Route path='/adminpanel/changeInformation' element={<UpdateUser />} />
						<Route path='/adminpanel/changePassword' element={<ChangePassword />} />
						<Route path='/adminpanel/registeradmin' element={<RegisterAdmin />} />
						<Route path='/adminpanel/categories' element={<CategoriesPanel />} />
						<Route path='/adminpanel/rssfeeds' element={<RssFeedPanel />} />
						<Route path='/adminpanel/users' element={<UsersPanel />} />
					</Route>
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
