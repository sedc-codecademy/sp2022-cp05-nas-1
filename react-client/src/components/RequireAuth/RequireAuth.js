import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function RequireAuth({ allowedRole }) {
	const auth = JSON.parse(localStorage.getItem('authUser'));
	const location = useLocation();
	const role = auth.isAdmin ? 'admin' : 'user';

	return auth.token && allowedRole === role ? (
		<Outlet />
	) : auth.token ? (
		<Navigate to='/unauthorized' state={{ from: location }} replace />
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	);
}

export default RequireAuth;
