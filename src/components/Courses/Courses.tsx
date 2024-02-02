import React, { FC, useEffect } from 'react';
import styles from './Courses.module.css';
import CourseInfo from '../CourseInfo/CourseInfo';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch } from 'react-redux';
import { store } from '../../store/index';
import { fetchCourses } from '../../store/service';
import { useGetAllCoursesQuery } from '../../store/courses/reducer';

const Courses: FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		store.dispatch(fetchCourses);
	}, [dispatch]);

	const { data, isFetching, isError } = useGetAllCoursesQuery("input");

	return (
		<div className={styles.Courses} data-testid='Courses'>
			<SearchBar />
			{isFetching
				? 'No data available'
				: data.result.map(course => <CourseInfo key={course.id} course={course}></CourseInfo>)}
			{ }
		</div>
	)
};

export default Courses;
