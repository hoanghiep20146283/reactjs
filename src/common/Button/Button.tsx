import React, { FC } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
	content: string;
	type: "submit" | "reset" | "button";
}

const Button: FC<ButtonProps> = ({ content, type }) => (
	<div className={styles.Button} data-testid='Button'>
		<button type={type}>{content}</button>
	</div>
);

export default Button;
