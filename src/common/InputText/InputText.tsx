import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import styles from './InputText.module.css';
import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from "framer-motion"
import { isFormInvalid, findInputError } from '../utils';

interface InputTextProps {
  content: string;
  type: string;
  name: string;
}

const InputText = forwardRef(function InputText(props: InputTextProps, forwardedRef: ForwardedRef<HTMLInputElement>) {
  const { type, content, name } = props;
  const { register, formState } = useFormContext();
  const isInvalid = isFormInvalid(formState.errors)
  const [inputError, setInputError] = useState<Record<string, any>>();
  useEffect(() => {
    setInputError(findInputError(formState.errors, name));
  }, [formState]);

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError?.error?.message}
            key={inputError?.error?.message}
          />
        )}
      </AnimatePresence>
      <input required type={type} className={styles.InputText} data-testid='InputText' placeholder={content}
        {...register(name, {
          required: {
            value: true,
            message: 'required',
          },
          min: {
            value: 10,
            message: "Minimum is 10 characters",
          }
        })} />
    </>
  );
});

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}>
      {message}
    </motion.p>
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