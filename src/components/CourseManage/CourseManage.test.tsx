import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseManage from './CourseManage';

describe('<CourseManage />', () => {
  test('it should mount', () => {
    render(<CourseManage />);
    
    const courseManage = screen.getByTestId('CourseManage');

    expect(courseManage).toBeDefined();
  });
});