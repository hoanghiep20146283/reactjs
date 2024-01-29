import React, { FC } from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
	const navigate = useNavigate();

	const handleLogout = (e) => {
		e.preventDefault();
		localStorage.removeItem('bearerToken');
		navigate('/login');
	}

	const handleLogin = (e) => {
		e.preventDefault();
		navigate('/login');
	}

	return (
		<div className={styles.Header} data-testid='Header'>
			<div className={styles.header}>
				<img src={'../assets/images/Vector.png'} />
				<div className={styles.space}></div>
				<div className={styles.description}>Harry Potter</div>
				{localStorage.getItem('bearerToken') ? (
					<button className={styles.loginButton} onClick={handleLogout} type='button'>
						Logout
					</button>
				) : (
					<button className={styles.loginButton} onClick={handleLogin} type='button'>
						Login
					</button>
				)}
			</div>
		</div>
	)

};

export default Header;
