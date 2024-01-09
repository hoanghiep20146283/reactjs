import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Courses from './Courses';

describe('<Courses />', () => {
  test('it should mount', () => {
    render(<Courses />);
    
    const courses = screen.getByTestId('Courses');

    expect(courses).toBeInTheDocument();
  });
});