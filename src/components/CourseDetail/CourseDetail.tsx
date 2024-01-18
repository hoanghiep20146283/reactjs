import React, { FC } from 'react';
import styles from './CourseDetail.module.css';
import {Button} from '../../common/Button/Button';

const CourseDetail: FC = () => (
  <div className={styles.CourseDetail} data-testid='CourseDetail'>
    <p className={styles.MainTitle}>JavaScript</p>
    <div className={styles.CourseWrapper}>
      <div className={styles.Description}>
        <p className={styles.Title}>Description:</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className={styles.Divider}></div>
      <div className={styles.Info}>
        <div className={styles.Space}></div>
        <div className={styles.InfoItem}>
          <p className={styles.InfoName}>ID:</p>
          <p className={styles.InfoValue}>231j3j-b34g5-b345m</p>
        </div>
        <div className={styles.InfoItem}>
          <p className={styles.InfoName}>Duration:</p>
          <p className={styles.InfoValue}>23:35 hours</p>
        </div><div className={styles.InfoItem}>
          <p className={styles.InfoName}>Created:</p>
          <p className={styles.InfoValue}>01.01.2023</p>
        </div><div className={styles.InfoItem}>
          <p className={styles.InfoName}>Authors: </p>
          <p className={styles.InfoValue}>Anna Sidorenko, Valentina Larina</p>
        </div>
      </div>
    </div>
    <div className={styles.ButtonWrapper}>
      <Button content='Back' />
    </div>
  </div>
);

export default CourseDetail;
