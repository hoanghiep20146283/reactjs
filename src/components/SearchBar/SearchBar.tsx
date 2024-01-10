import React, { FC } from 'react';
import styles from './SearchBar.module.css';
import Button from '../../common/Button/Button';
import InputText from '../../common/InputText/InputText';

const SearchBar: FC = () => (
	<div className={styles.SearchBar} data-testid='SearchBar'>
		<InputText content="Type search text.." />
		<Button content='SEARCH' />
		<div className={styles.Space}></div>
		<Button content='ADD NEW COURSE' />
	</div>
);

export default SearchBar;
