import React, { FC } from 'react';
import styles from './Courses.module.css';
import CourseInfo from '../CourseInfo/CourseInfo';
import SearchBar from '../SearchBar/SearchBar';
import { useGetAllCoursesQuery } from '../../store/courses/reducer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { createSelector } from '@reduxjs/toolkit/react';

type QueryResult = {
	result?: any;
};

const selectFilteredCourses = createSelector(
	[(state: RootState) => {
		const queryResult = state.courses.queries["getAllCourses(undefined)"]?.data;
		return (queryResult as QueryResult).result;
	}, (state: RootState) => state.courseFilter],
	(courses, searchText) => (searchText && searchText.trim().length > 0) ?
		courses.filter(course => course.title.toUpperCase().indexOf(searchText.trim().toUpperCase()) !== -1) ?? [] : courses,
)

const Courses: FC = () => {
	const { isFetching } = useGetAllCoursesQuery({});

	const filteredCourses = useSelector((state: RootState) => selectFilteredCourses(state));

	// const searchText = useSelector((state:RootState) => state.courseFilter);
	// const filteredCourses = (searchText && searchText.trim().length > 0) ? data?.result.filter(course => course.title.toUpperCase().indexOf(searchText.trim().toUpperCase()) !== -1) : data?.result;

	return (
		<div className={styles.Courses} data-testid='Courses'>
			<SearchBar />
			{(!isFetching && filteredCourses)
				? filteredCourses.map(course => <CourseInfo key={course.id} course={course}></CourseInfo>)
				: 'No data available'
			}
		</div>
	)
};

export default Courses;
