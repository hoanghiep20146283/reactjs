import React, { FC } from 'react';
import styles from './Login.module.css';
import InputText from '../../common/InputText/InputText';
import Button from '../../common/Button/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { store } from '../../store';
import { useDispatch } from 'react-redux';
import { UserActionTypes } from '../../store/users/types';

type FormValues = {
  email: string;
  password: string;
}

const Login: FC = () => {
  const methods = useForm<FormValues>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async user => {
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const loginResponse = await response.json();
    if (loginResponse && loginResponse.result && loginResponse.result.startsWith('Bearer')) {
      dispatch({ type: UserActionTypes.SAVE_USER, payload: { ...loginResponse.user, token: loginResponse.result.slice('Bearer'.length) } })
      localStorage.setItem('bearerToken', loginResponse.result.slice('Bearer'.length));
      navigate('/courses');
    } else {
      alert(JSON.stringify(loginResponse));
    }
  };

  return (
    <div className={styles.Login} data-testid='Login'>
      <div className={styles.Space}></div>
      <p>Login</p>
      <div className={styles.LoginForm}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <div className={styles.Title}>Email</div>
            <InputText content='Type your Email..' type='text' name='email' />
            <div className={styles.Title}>Password</div>
            <InputText content='Type your Password..' type='password' name='password' />
            <Button content='Login' type='submit' />
            <p>
              If you have an account you may <Link to={"/registration"}>Registration</Link>
            </p>
          </form>
        </FormProvider>
      </div>
    </div>
  )
};

export default Login;
