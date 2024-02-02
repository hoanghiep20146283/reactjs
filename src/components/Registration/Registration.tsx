import React, { FC } from 'react';
import styles from './Registration.module.css';
import InputText from '../../common/InputText/InputText';
import Button from '../../common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from "react-hook-form"

type FormValues = {
  name: string;
  email: string;
  password: string;
}

const Registration: FC = () => {
  const navigate = useNavigate();

  const methods = useForm<FormValues>();

  const onSubmit = async newUser => {
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    if (result && result.successful === true) {
      navigate("/login");
    } else {
      alert(JSON.stringify(result));
    }
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
            <Button content='Login' type='submit' />
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
