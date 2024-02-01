import React, { FC } from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserActionTypes } from '../../store/users/types';
import { RootState } from '@/store/rootReducer';

const Header: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.user);

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch({ type: UserActionTypes.CLEAR_USER });
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
				<div className={styles.description}>{user.name}</div>
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
