import React, { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => (
	<div className={styles.Header} data-testid='Header'>
		<div className={styles.header}>
			<img src={'../assets/images/Vector.png'} />
			<div className={styles.space}></div>
			<div className={styles.description}>Harry Potter</div>
			<button className={styles.loginButton}>Login</button>
		</div>
	</div>
);

export default Header;
