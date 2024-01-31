import React, { FC, useEffect } from 'react';
import styles from './Courses.module.css';
import CourseInfo from '../CourseInfo/CourseInfo';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { store } from '../../store/index';
import { fetchCourses } from '../../store/service';

const Courses: FC = () => {
	const dispatch = useDispatch();	

	useEffect(() => {
		store.dispatch(fetchCourses);
	}, [dispatch]);

	const courses = useSelector((state: RootState) => state.courses);

	return (
		<div className={styles.Courses} data-testid='Courses'>
			<SearchBar />
			{courses.map(course => <CourseInfo key={course.id} course={course}></CourseInfo>)}
		</div>
	)
};

export default Courses;
