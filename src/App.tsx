import React, { useEffect } from 'react';
import './App.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
function App() {
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		console.log(`location.pathname: ${location.pathname}`);
		if (token && (location.pathname === '/' || location.pathname === '')) {
			navigate('/courses');
		}
	}, []);
	const token = localStorage.getItem('bearerToken');
	if (token && (location.pathname === '/' || location.pathname === '')) {
		navigate('/courses');
	}
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default App;
