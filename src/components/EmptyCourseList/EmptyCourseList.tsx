import React, { FC } from 'react';
import styles from './EmptyCourseList.module.css';

interface EmptyCourseListProps { }

const EmptyCourseList: FC<EmptyCourseListProps> = () => (
  <div className={styles.EmptyCourseList} data-testid="EmptyCourseList">
  </div>
);

export default EmptyCourseList;
