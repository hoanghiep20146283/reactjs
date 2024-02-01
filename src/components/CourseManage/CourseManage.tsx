import React, { FC, useEffect, useState } from 'react';
import styles from './CourseManage.module.css';
import InputText from '../../common/InputText/InputText';
import Button from '../../common/Button/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { store } from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthors } from '../../store/service';
import { RootState } from '../../store/rootReducer';
import { useNavigate } from 'react-router-dom';
import { CoursesActionTypes } from '../../store/courses/types';
import { AuthorsActionTypes } from '@/store/authors/types';
type FormValues = {
  title: string;
  description: string;
}

type AuthorValue = {
  name: string;
}

const CourseManage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    store.dispatch(fetchAuthors);
  }, [dispatch]);

  const authors = useSelector((state: RootState) => state.authors);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);

  const addAuthor = async author => {
    const selectedAuthor = authors.find(element => element.name === author.name);
    if (selectedAuthor) {
      setSelectedAuthors([...selectedAuthors, selectedAuthor.id])
      return;
    }
    alert('Author not exist!');
  }

  const onSubmit = async course => {
    course.duration = parseInt(course.duration);
    course.authors = selectedAuthors;
    const token = localStorage.getItem('bearerToken');

    if (!token) {
      console.error('No access token found in local storage.');
      return;
    }

    const response = await fetch('http://localhost:4000/courses/add', {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const courseResponse = await response.json();
    if (courseResponse && courseResponse.result) {
      dispatch({ type: CoursesActionTypes.ADD_COURSE, payload: courseResponse.result })
      navigate('/courses');
    } else {
      alert(JSON.stringify(courseResponse));
    }
  };

  const methods = useForm<FormValues>();
  const authorMethods = useForm<AuthorValue>();

  return (
    <div data-testid='CourseManage' className={styles.CourseManage}>
      <p className={styles.PageTitle}>Course Edit/Create Page</p>
      <div className={styles.RegistrationForm}>
        <div className={styles.MainTitle}>Main Info</div>
        <div className={styles.Title}>Title</div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <InputText content='Type your Title..' type='text' name='title' />
            <div className={styles.Title}>Description</div>
            <InputText content='Type your Description..' type='textarea' name='description' />
            <div className={styles.MainTitle}>Duration</div>
            <div className={styles.Title}>Duration</div>
            <div className={styles.DurationGroup}>
              <InputText content='Type your Duration..' type='number' name='duration' />
              <p><b>00:00</b> hours</p>
            </div>
          </form>
        </FormProvider>

        <div className={styles.AuthorSection}>
          <div>
            <div className={styles.MainTitle}>Author</div>
            <div className={styles.Title}>Author Name</div>
            <div className={styles.AuthorGroup}>
              <FormProvider {...authorMethods}>
                <form onSubmit={authorMethods.handleSubmit(addAuthor)} className={styles.formHorizontal} noValidate>
                  <InputText content='Type your Author Name..' type='text' name='name' />
                  <Button content='Create Author' type='submit' />
                </form>
              </FormProvider>
            </div>
            <p className={styles.MainTitle}>Author List</p>
            {
              authors.map(author =>
                <>
                  <div className={styles.TextWrapper} id={author.id}>
                    <p>{author.name}</p>
                    <p>+</p>
                    <img src={'../assets/images/trash.png'} alt="" />
                  </div>
                </>
              )
            }
          </div>
          <div className={styles.CourseAuthors}>
            <div className={styles.MainTitle}>Course Authors</div>
            <p>Author list is empty</p>
          </div>
        </div>
      </div>
      <div className={styles.ButtonGroup}>
        <div className={styles.ButtonWrapper}>
          <Button content='Cancel' type='reset' />
        </div>
        <div className={styles.ButtonWrapper}>
          <Button content='Create Course' type='submit' onClick={methods.handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  )
};

export default CourseManage;
