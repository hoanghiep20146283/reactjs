import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseDetail from './CourseDetail';

describe('<CourseDetail />', () => {
  test('it should mount', () => {
    render(<CourseDetail />);
    
    const courseDetail = screen.getByTestId('CourseDetail');

    expect(courseDetail).toBeInTheDocument();
  });
});