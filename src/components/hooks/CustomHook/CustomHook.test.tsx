import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomHook from './CustomHook';

describe('<CustomHook />', () => {
  test('it should mount', () => {
    render(<CustomHook initialValue='0' />);
    
    const customHook = screen.getByTestId('CustomHook');

    expect(customHook).toBeInTheDocument();
  });
});