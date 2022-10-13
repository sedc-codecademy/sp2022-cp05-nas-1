import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import NotFound from './pages/NotFound/NotFound';
import Articles from './pages/Articles/Articles';
import Article from './pages/Article/Article';
import Cookies from './pages/Cookies/Cookies';
import Privacy from './pages/Privacy/Privacy';
import Feedback from './pages/Feedback/Feedback';
import AboutLayout from './pages/About/AboutLayout/AboutLayout';
import Newstopia from './pages/About/Newstopia/Newstopia';
import Team from './pages/About/Team/Team';
import Contact from './pages/About/Contact/Contact';
import AdsPanel from './pages/UserLayout/AdsPanel/AdsPanel';
function App() {
	const { pathname } = useLocation();
	const { setAuth } = useAuth();
	const [displaySidebar, setDisplaySidebar] = useState(false);
	const toggleDisplaySidebar = () => {
		setDisplaySidebar((prev) => !prev);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

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
					<Route path='/' element={<Navigate to={'/news/page/1'} />} />
					<Route path='/news/page/:pageNumber' element={<Articles />} />
					<Route path='/news/:categoryName/page/:pageNumber' element={<Articles />} />
					<Route path='/news/search/:searchQuery/page/:pageNumber' element={<Articles />} />
					<Route path='/news/article/:articleId' element={<Article />}></Route>
					<Route path='/about' element={<AboutLayout />}>
						<Route path='/about' element={<Navigate to={'/about/newstopia'} />} />
						<Route path='/about/newstopia' element={<Newstopia />} />
						<Route path='/about/team' element={<Team />} />
						<Route path='/about/contact' element={<Contact />} />
					</Route>
					<Route path='/feedback' element={<Feedback />} />
					<Route path='/cookies' element={<Cookies />} />
					<Route path='/privacy' element={<Privacy />} />
					<Route path='/unauthorized' element={<Unauthorized />} />
					<Route path='/*' element={<NotFound />}></Route>
				</Route>
				{/* USER ROUTES */}
				<Route path='/user' element={<RequireAuth allowedRole='user' />}>
					<Route path='/user' element={<Navigate to={'/user/details'} replace />} />
					<Route path='/user' element={<UserLayout displaySidebar={displaySidebar} />}>
						<Route path='/user/details' element={<UserDetails />} />
						<Route path='/user/changeInformation' element={<UpdateUser />} />
						<Route path='/user/changePassword' element={<ChangePassword />} />
					</Route>
				</Route>
				{/* ADMIN ROUTES */}
				<Route path='/adminpanel' element={<RequireAuth allowedRole='admin' />}>
					<Route path='/adminpanel' element={<Navigate to={'/adminpanel/details'} replace />} />
					<Route path='/adminpanel' element={<UserLayout displaySidebar={displaySidebar} />}>
						<Route path='/adminpanel/details' element={<UserDetails />} />
						<Route path='/adminpanel/changeInformation' element={<UpdateUser />} />
						<Route path='/adminpanel/changePassword' element={<ChangePassword />} />
						<Route path='/adminpanel/registeradmin' element={<RegisterAdmin />} />
						<Route path='/adminpanel/categories' element={<CategoriesPanel />} />
						<Route path='/adminpanel/rssfeeds' element={<RssFeedPanel />} />
						<Route path='/adminpanel/ads' element={<AdsPanel />} />
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
