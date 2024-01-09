import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('<Button />', () => {
	test('it should mount', () => {
		render(<Button content={'test'} />);

		const button = screen.getByTestId('Button');

		expect(button).toBeInTheDocument();
	});
});

function expect(_button: HTMLElement) {
	throw new Error('Function not implemented.');
}
