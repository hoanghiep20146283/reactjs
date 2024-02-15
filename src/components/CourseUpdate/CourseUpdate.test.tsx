import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseUpdate from './CourseUpdate';

describe('<CourseUpdate />', () => {
  test('it should mount', () => {
    render(<CourseUpdate />);
    
    const courseUpdate = screen.getByTestId('CourseUpdate');

    expect(courseUpdate).toBeDefined();
  });
});