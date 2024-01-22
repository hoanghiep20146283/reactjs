import React, { FC } from 'react';
import styles from './CourseUpdate.module.css';
import InputText from '../../common/InputText/InputText';
import Button from '../../common/Button/Button';

const CourseUpdate: FC = () => (
  <div data-testid='CourseUpdate' className={styles.CourseUpdate}>
    <p className={styles.PageTitle}>Course Edit/Create Page</p>
    <div className={styles.RegistrationForm}>
      <div className={styles.MainTitle}>Main Info</div>
      <div className={styles.Title}>Title</div>
      <InputText content='Type your Title..' type='text' name='title' />
      <div className={styles.Title}>Description</div>
      <InputText content='Type your Description..' type='textarea' name='description' />
      <div className={styles.MainTitle}>Duration</div>
      <div className={styles.Title}>Duration</div>
      <div className={styles.DurationGroup}>
        <InputText content='Type your Duration..' type='text' name='duration' />
        <p><b>00:00</b> hours</p>
      </div>
      <div className={styles.MainTitle}>Author 2</div>
      <div className={styles.Title}>Author Name</div>
      <div className={styles.AuthorGroup}>
        <InputText content='Type your Author Name..' type='text' name='author' />
        <Button content='Create Author' type='submit' />
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
        <Button content='Cancel' type='reset' />
      </div>
      <div className={styles.ButtonWrapper}>
        <Button content='Create Course' type='submit' />
      </div>
    </div>
  </div>
);

export default CourseUpdate;
