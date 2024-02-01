import React, { FC } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
	content: string;
	type: "submit" | "reset" | "button";
	onClick?: any,
}

const Button: FC<ButtonProps> = ({ content, type, onClick }) => (
	<div className={styles.Button} data-testid='Button'>
		<button type={type} onClick={onClick}>{content}</button>
	</div>
);

export default Button;
