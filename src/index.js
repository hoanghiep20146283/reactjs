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
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />}>
						<Route path='/courses' element={<Courses />} />
						<Route path='login' element={<Login />} />
						<Route path='registration' element={<Registration />} />
						<Route path='empty' element={<EmptyCourseList />} />
						<Route path='/courses/add' element={<CourseManage />} />
						<Route path='/courses/:courseId' element={<CourseDetail />} />\
						<Route path='*' element={<Navigate to='/' />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	</Provider>
);
