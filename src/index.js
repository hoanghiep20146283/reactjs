import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Login from './components/Login/Login.tsx';
import Registration from './components/Registration/Registration.tsx';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList.tsx';
import CourseUpdate from './components/CourseUpdate/CourseUpdate.tsx';
import CourseDetail from './components/CourseDetail/CourseDetail.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
					<Route path='empty' element={<EmptyCourseList />} />
					<Route path='edit' element={<CourseUpdate />} />
					<Route path='detail' element={<CourseDetail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
