import React, { FC } from 'react';
import styles from './EmptyCourseList.module.css';

const EmptyCourseList: FC = () => (
	<div className={styles.EmptyCourseList} data-testid='EmptyCourseList'></div>
);

export default EmptyCourseList;
