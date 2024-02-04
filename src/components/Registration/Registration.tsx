import React, { FC } from 'react';
import styles from './Registration.module.css';
import InputText from '../../common/InputText/InputText';
import Button from '../../common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { UserActionTypes } from '../../store/users/types';

type FormValues = {
  name: string;
  email: string;
  password: string;
}

const Registration: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const methods = useForm<FormValues>();

  const onSubmit = async newUser => {
    dispatch({ type: UserActionTypes.REGISTER_USER, payload: newUser });
    navigate('/login');
  };

  console.log(`[Registration] formState name errors is: ${JSON.stringify(methods.formState.errors.name?.message)}`);

  return (
    <div className={styles.Registration} data-testid='Registration'>
      <div className={styles.Space}></div>
      <p>Registration</p>
      <div className={styles.RegistrationForm}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <div className={styles.Title}>Name</div>
            <InputText content='Type your Name..' name='name' type='text' />
            <div className={styles.Title}>Email</div>
            <InputText content='Type your Email..' name='email' type='email' />
            <div className={styles.Title}>Password</div>
            <InputText content='Type your Password..' name='password' type='password' />
            <Button content='Register' type='submit' />
            <p>
              If you have an account you may <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </FormProvider>
      </div>
    </div>
  )
};

export default Registration;
