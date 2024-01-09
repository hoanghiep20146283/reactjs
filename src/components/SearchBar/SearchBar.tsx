import React, { FC } from 'react';
import styles from './SearchBar.module.css';
import Button from '../../common/Button/Button';

const SearchBar: FC = () => (
	<div className={styles.SearchBar} data-testid='SearchBar'>
		<input type='text' />
		<Button content='SEARCH' />
		<div className={styles.Space}></div>
		<Button content='ADD NEW COURSE' />
	</div>
);

export default SearchBar;
