import React, { FC } from 'react';
import styles from './Login.module.css';
import InputText from '../../common/InputText/InputText';
import Button from '../../common/Button/Button';
import { FormProvider, useForm } from 'react-hook-form';

const Login: FC = () => {
  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
  return (
    <div className={styles.Login} data-testid='Login'>
      <div className={styles.Space}></div>
      <p>Login</p>
      <div className={styles.LoginForm}>
        <FormProvider {...methods}>
          <form onSubmit={e => e.preventDefault()} noValidate >
            <div className={styles.Title}>Email</div>
            <InputText content='Type your Email..' type='text' name='email' />
            <div className={styles.Title}>Password</div>
            <InputText content='Type your Password..' type='password' name='passoword' />
            <Button content='Login' type='submit' />
            <p>
              If you don't have an account you may
              <br />
              <b>Registration</b>
            </p>
          </form>
        </FormProvider>
      </div>
    </div>
  )
};

export default Login;
