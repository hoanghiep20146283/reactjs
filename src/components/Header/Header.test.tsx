import { render, screen } from '@testing-library/react';

import React from 'react';
import Header from './Header';

describe('App', () => {
    test('Renders App component', () => {
        // Used React Testing Library's render method to virtually render the App component and append it to the document.body node.
        render(<Header />);

        // Checks whether the element is in the DOM
        expect(screen.getByText('LOGIN')).toBeDefined();
    });
});