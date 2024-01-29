import React, { FC, useEffect } from 'react';
import styles from './Courses.module.css';
import CourseInfo from '../CourseInfo/CourseInfo';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { Course, CoursesActionTypes } from '../../store/courses/types';
import * as reducer from '../../store/courses/reducer';

const Courses: FC = () => {
	const dispatch = useDispatch();
	const fetchCoursesRequest = () => ({
		type: CoursesActionTypes.SAVE_COURSES,
	});

	const fetchCoursesSuccess = (courses) => ({
		type: CoursesActionTypes.SAVE_COURSES,
		payload: courses,
	});

	const fetchCoursesFailure = (error) => ({
		type: CoursesActionTypes.SAVE_COURSES,
		payload: error,
	});

	const fetchCourses = async (dispatch, getState) => {
		try {
			const response = await fetch('http://localhost:4000/courses/all', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const courseResponses = await response.json();
			dispatch({ type: CoursesActionTypes.SAVE_COURSES, payload: courseResponses.result })
		} catch (error) {
			dispatch(fetchCoursesFailure(error));
		}
	}

	useEffect(() => {
		reducer.default.dispatch(fetchCourses);
	}, []);

	const courses = useSelector((state: reducer.RootState) => state.courses);

	return (
		<div className={styles.Courses} data-testid='Courses'>
			<SearchBar />
			{courses.map(course => <CourseInfo></CourseInfo>)}
		</div>
	)
};

export default Courses;
