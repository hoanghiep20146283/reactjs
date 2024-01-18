import React, { FC } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
	content: string;
}

export const Button: FC<ButtonProps> = ({ content }) => (
	<div className={styles.Button} data-testid='Button'>
		<button type='button'>{content}</button>
	</div>
);
