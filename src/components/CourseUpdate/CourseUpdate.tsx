import React, { FC } from 'react';
import styles from './CourseUpdate.module.css';
import InputText from '../../common/InputText/InputText';
import Button from '../../common/Button/Button';

const CourseUpdate: FC = () => (
  <div className={styles.CourseUpdate} data-testid='CourseUpdate'>
    <p className={styles.PageTitle}>Course Edit/Create Page</p>
    <div className={styles.RegistrationForm}>
      <div className={styles.MainTitle}>Main Info</div>
      <div className={styles.Title}>Title</div>
      <InputText content='Type your Title..' type='text' />
      <div className={styles.Title}>Description</div>
      <InputText content='Type your Description..' type='textarea' />
      <div className={styles.MainTitle}>Duration</div>
      <div className={styles.Title}>Duration</div>
      <div className={styles.DurationGroup}>
        <InputText content='Type your Duration..' type='text' />
        <p><b>00:00</b> hours</p>
      </div>
      <div className={styles.MainTitle}>Author</div>
      <div className={styles.Title}>Author Name</div>
      <div className={styles.AuthorGroup}>
        <InputText content='Type your Author Name..' type='text' />
        <Button content='Create Author' />
      </div>
      <p>Author List</p>
      <div className={styles.TextWrapper}>
        <p>Author One</p>
        <p>+</p>
      </div>
      <div className={styles.TextWrapper}>
        <p className={styles.AuthorTitle}>Author Two</p>
        <p>+</p>
      </div>
    </div>
    <div className={styles.ButtonGroup}>
      <div className={styles.ButtonWrapper}>
        <Button content='Cancel' />
      </div>
      <div className={styles.ButtonWrapper}>
        <Button content='Create Course' />
      </div>
    </div>
  </div>
);

export default CourseUpdate;
