import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('<Button />', () => {
	test('it should mount', async () => {
		render(<Button type='submit' content='test' />);

		const button = await waitFor(() => screen.getByTestId('Button'));

		expect(button).toBeDefined();
	});
});