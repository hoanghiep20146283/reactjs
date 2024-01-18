import React, { FC } from 'react';
import styles from './Registration.module.css';
import InputText from '../../common/InputText/InputText';
import {Button} from '../../common/Button/Button';

const Registration: FC = () => (
  <div className={styles.Registration} data-testid='Registration'>
    <div className={styles.Space}></div>
    <p>Registration</p>
    <div className={styles.RegistrationForm}>
    <div className={styles.Title}>Name</div>
      <InputText content='Type your Name..' type='text' />
      <div className={styles.Title}>Email</div>
      <InputText content='Type your Email..' type='text' />
      <div className={styles.Title}>Password</div>
      <InputText content='Type your Password..' type='password' />
      <Button content='Login' />
      <p>
        If you have an account you may <b>Login</b>
      </p>
    </div>
  </div>
);

export default Registration;
