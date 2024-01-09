import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseInfo from './CourseInfo';

describe('<CourseInfo />', () => {
  test('it should mount', () => {
    render(<CourseInfo />);
    
    const courseInfo = screen.getByTestId('CourseInfo');

    expect(courseInfo).toBeInTheDocument();
  });
});