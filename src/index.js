import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Login from './components/Login/Login.tsx';
import Courses from './components/Courses/Courses.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='login' element={<Login />} />
					<Route path='/' element={<Courses />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
