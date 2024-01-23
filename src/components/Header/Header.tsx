import React, { FC } from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		console.log("Logging out...")
		e.preventDefault();
		localStorage.removeItem('bearerToken');
		navigate('/login');
	}
	if (localStorage.getItem('bearerToken')) {
		return (
			<div className={styles.Header} data-testid='Header'>
				<div className={styles.header}>
					<img src={'../assets/images/Vector.png'} />
					<div className={styles.space}></div>
					<div className={styles.description}>Harry Potter</div>
					<button className={styles.loginButton} onSubmit={handleSubmit} type='button'>Logout</button>
				</div>
			</div>
		)
	} else {
		return (
			<div className={styles.Header} data-testid='Header'>
				<div className={styles.header}>
					<img src={'../assets/images/Vector.png'} />
					<div className={styles.space}></div>
					<div className={styles.description}>Harry Potter</div>
					<button className={styles.loginButton} onSubmit={handleSubmit} type='button'>Login</button>
				</div>
			</div>
		)
	}
};

export default Header;
