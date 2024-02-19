import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputText from './InputText';
import { FormProvider, useForm } from 'react-hook-form';

jest.mock('react-hook-form', () => ({
	...jest.requireActual('react-hook-form'),
	Controller: () => <></>,
	useForm: () => ({
		control: () => ({}),
		handleSubmit: () => jest.fn(),
	}),
	useFormContext: () => ({
		register: () => ({}),
		handleSubmit: () => jest.fn(),
	}),
}))

describe('<InputText />', () => {
	const methods = useForm();
	test('it should mount', () => {
		render(
			<FormProvider {...methods}>
				<form>
					<InputText name='test' content='test' type='text' />
				</form>
			</FormProvider>
		);

		const inputText = screen.getByTestId('InputText');

		expect(inputText).toBeDefined();
	});
});