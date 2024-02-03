import React, { FC } from 'react';
import styles from './Login.module.css';
import InputText from '../../common/InputText/InputText';
import Button from '../../common/Button/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../store/users/types';
import { login } from '../../store/users/reducer';
import { store } from '../../store';

const Login: FC = () => {
  const methods = useForm<User>();
  const navigate = useNavigate();

  const onSubmit = async (user: User) => {
    store.dispatch(login(user)).then(({ payload }) => {
      localStorage.setItem('bearerToken', payload.result.slice('Bearer'.length));
      navigate('/courses');
    });
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
