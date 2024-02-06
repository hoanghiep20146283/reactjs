import React, { FC, useRef } from 'react';
import styles from './SearchBar.module.css';
import Button from '../../common/Button/Button';
import InputText from '../../common/InputText/InputText';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { courseFilterSlice } from '../../store/courses/reducer';

const SearchBar: FC = () => {
	const searchRef = useRef<HTMLInputElement>(null);
	const methods = useForm();
	const dispatch = useDispatch();
	const onSubmit = ({ searchText }) => {
		dispatch(courseFilterSlice.actions.updateFilter(searchText));
	};

	return (
		<div className={styles.SearchBar} data-testid='SearchBar'>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} className={styles.formHorizontal} noValidate>
					<InputText content="Type search text.." name='searchText' type='text' ref={searchRef} required={false} />
					<Button content='SEARCH' type='submit' />
				</form>
			</FormProvider>
			<div className={styles.Space}></div>
			<div className={styles.AddNewCourse}>
				<Link to={"/courses/add"}>ADD NEW COURSE</Link>
			</div>
		</div>
	)
};

export default SearchBar;
