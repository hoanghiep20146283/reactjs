import React, { FC } from 'react';
import styles from './Login.module.css';
import InputText from '../../common/InputText/InputText';

const Login: FC = () => (
  <div className={styles.Login} data-testid='Login'>
    <p>Login</p>
    <div className={styles.LoginForm}>
      <div className={styles.Title}>Email</div>
      <InputText content='Type your Email..' type='text' />
      <div className={styles.Title}>Password</div>
      <InputText content='Type your Password..' type='password' />
      <p>If you don't have an account you may Registration</p>
    </div>
  </div>
);

export default Login;
