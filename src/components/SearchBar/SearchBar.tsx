import React, { FC, useRef } from 'react';
import styles from './SearchBar.module.css';
import Button from '../../common/Button/Button';
import InputText from '../../common/InputText/InputText';
import { FormProvider, useForm } from 'react-hook-form';

const SearchBar: FC = () => {
	const searchRef = useRef<HTMLInputElement>(null);
	const methods = useForm({
		defaultValues: {
			search: "",
		},
	})
	return (
		<div className={styles.SearchBar} data-testid='SearchBar'>
			<FormProvider {...methods}>
				<form onSubmit={e => e.preventDefault()} noValidate >
					<InputText content="Type search text.." name='search' type='text' ref={searchRef} />
				</form>
			</FormProvider>
			<Button content='SEARCH' type='submit' />
			<div className={styles.Space}></div>
			<Button content='ADD NEW COURSE' type='submit' />
		</div>
	)
};

export default SearchBar;
