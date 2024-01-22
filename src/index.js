import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Login from './components/Login/Login.tsx';
import Registration from './components/Registration/Registration.tsx';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList.tsx';
import CourseDetail from './components/CourseDetail/CourseDetail.tsx';
import CourseManage from './components/CourseManage/CourseManage.tsx';
import Courses from './components/Courses/Courses.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='/list' element={<Courses />} />
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
					<Route path='empty' element={<EmptyCourseList />} />
					<Route path='edit' element={<CourseManage />} />
					<Route path="/courses/:courseId" element={<CourseDetail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
