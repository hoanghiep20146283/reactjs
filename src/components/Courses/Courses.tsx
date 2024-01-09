import React, { FC } from 'react';
import styles from './Courses.module.css';
import Header from '../Header/Header';
import CourseInfo from '../CourseInfo/CourseInfo';
import SearchBar from '../SearchBar/SearchBar';

const Courses: FC = () => (
	<div className={styles.Courses} data-testid='Courses'>
		<Header />
		<SearchBar />
		<CourseInfo />
		<CourseInfo />
	</div>
);

export default Courses;
