import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputText from './InputText';

describe('<InputText />', () => {
	test('it should mount', () => {
		render(<InputText content='Type your Title..' type='text' name='title' />);

		const inputText = screen.getByTestId('InputText');

		expect(inputText).toBeDefined();
	});
});
