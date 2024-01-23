import React, { FC } from 'react';
import styles from './CourseManage.module.css';
import InputText from '../../common/InputText/InputText';
import Button from '../../common/Button/Button';
import { FormProvider, useForm } from 'react-hook-form';

type FormValues = {
  title: string;
  description: string;
}

const CourseManage: FC = () => {
  const methods = useForm<FormValues>();
  return (
    <div data-testid='CourseManage' className={styles.CourseManage}>
      <p className={styles.PageTitle}>Course Edit/Create Page</p>
      <FormProvider {...methods}>
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
          <div className={styles.AuthorSection}>
            <div>
              <div className={styles.MainTitle}>Author</div>
              <div className={styles.Title}>Author Name</div>
              <div className={styles.AuthorGroup}>
                <InputText content='Type your Author Name..' type='text' name='author' />
                <Button content='Create Author' type='button' />
              </div>
              <p className={styles.MainTitle}>Author List</p>
              <div className={styles.TextWrapper}>
                <p>Author One</p>
                <p>+</p>
                <img src={'../assets/images/trash.png'} alt="" />
              </div>
              <div className={styles.TextWrapper}>
                <p className={styles.AuthorTitle}>Author Two</p>
                <p>+</p>
                <img src={'../assets/images/trash.png'} alt="" />
              </div>
            </div>
            <div className={styles.CourseAuthors}>
              <div className={styles.MainTitle}>Course Authors</div>
              <p>Author list is empty</p>
            </div>
          </div>
        </div>
      </FormProvider>
      <div className={styles.ButtonGroup}>
        <div className={styles.ButtonWrapper}>
          <Button content='Cancel' type='button' />
        </div>
        <div className={styles.ButtonWrapper}>
          <Button content='Create Course' type='button' />
        </div>
      </div>
    </div>
  )
};

export default CourseManage;
