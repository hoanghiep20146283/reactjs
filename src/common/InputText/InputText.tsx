import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import styles from './InputText.module.css';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence } from "framer-motion"
import { isFormInvalid, findInputError } from '../utils';

interface InputTextProps {
  content: string;
  type: string;
  name: string;
  required?: boolean;
}

const InputText = forwardRef(function InputText(props: InputTextProps, forwardedRef: ForwardedRef<HTMLInputElement>) {
  const { type, content, name } = props;
  const { register, formState } = useFormContext();
  const isInvalid = isFormInvalid(formState.errors)
  const [inputError, setInputError] = useState<Record<string, any>>();

  useEffect(() => {
    setInputError(findInputError(formState.errors, name));
    console.log(`[InputText] formState name errors is: ${JSON.stringify(formState.errors.name?.message)}, inputError: ${inputError}`);
  }, [formState]);

  return (
    <>
      {props.required ?
        <input required type={type} className={styles.InputText} data-testid='InputText' placeholder={content}
          {...register(name, {
            required: {
              value: true,
              message: 'required',
            },
            validate: (value, formValue) => {
              console.log(`Validating: ${value}, formValue: ${formValue}`);
              if (value === "") {
                return "Value is not empty";
              } else if (value.trim() === "") {
                return "Value is not blank";
              }
              return true;
            }
          })} />
        :
        <input type={type} className={styles.InputText} data-testid='InputText' placeholder={content}
          {...register(name, {
            required: {
              value: false,
              message: 'required',
            }
          })} />}
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError?.error?.message}
            key={inputError?.error?.message}
          />
        )}
      </AnimatePresence>
    </>
  );
});

const InputError = ({ message }) => {
  return (
    <div className={styles.warningSection}>
      <p className={styles.warningMessage}>{message}</p>
    </div>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}

export default InputText;

function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}