import React, { FC } from 'react';
import styles from './CourseManage.module.css';
import InputText from '../../common/InputText/InputText';
import Button from '@mui/material/Button';
import {Button as MyButton} from "../../common/Button/Button";
import injectTapEventPlugin from 'react-tap-event-plugin';

const styleObj = {
  "&:hover": {
    backgroundColor: "red"
  },
  "&:active": {
    backgroundColor: "blue"
  }
};

const CourseManage: FC = () => (
  <div data-testid='CourseManage' className={styles.CourseManage}>
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
      <div className={styles.AuthorSection}>
        <div>
          <div className={styles.MainTitle}>Author</div>
          <div className={styles.Title}>Author Name</div>
          <div className={styles.AuthorGroup}>
            <InputText content='Type your Author Name..' type='text' />
            <MyButton content='Create Author' />
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
    <div className={styles.ButtonGroup}>
      <div className={styles.ButtonWrapper}>
        <MyButton content='Cancel' />
      </div>
      <div className={styles.ButtonWrapper}>
        <MyButton content='Create Course' />
      </div>
      <div>
        <Button disableRipple sx={styleObj} variant="text">
          MaterialUI
        </Button>
      </div>
    </div>
  </div>
);

export default CourseManage;
