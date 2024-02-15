import React, { FC } from 'react';
import styles from './EmptyCourseList.module.css';
import Button from '../../common/Button/Button';

const EmptyCourseList: FC = () => (
	<div className={styles.EmptyCourseList} data-testid='EmptyCourseList'>
		<div className={styles.Space}></div>
		<p className={styles.Title}>
			<b>Your List Is Empty</b>
		</p>
		<p>
			Please use ’Add New Course’ button to add your first course
		</p>
		<Button content='Add new course' type='button' />
	</div>
);

export default EmptyCourseList;
