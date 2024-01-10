import React, { FC } from 'react';
import styles from './InputText.module.css';

interface InputTextProps {
  content: string;
  type: string;
}

const InputText: FC<InputTextProps> = ({ content, type }) => (
  <input type={type} className={styles.InputText} data-testid='InputText' placeholder={content} />
);

export default InputText;
