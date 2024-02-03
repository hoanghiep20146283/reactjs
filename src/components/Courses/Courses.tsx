import React, { FC, useEffect } from 'react';
import styles from './Courses.module.css';
import CourseInfo from '../CourseInfo/CourseInfo';
import SearchBar from '../SearchBar/SearchBar';
import { useGetAllCoursesQuery } from '../../store/courses/reducer';

const Courses: FC = () => {
	const { data, isFetching } = useGetAllCoursesQuery();

	return (
		<div className={styles.Courses} data-testid='Courses'>
			<SearchBar />
			{isFetching
				? 'No data available'
				: data?.result.map(course => <CourseInfo key={course.id} course={course}></CourseInfo>)}
			{ }
		</div>
	)
};

export default Courses;
