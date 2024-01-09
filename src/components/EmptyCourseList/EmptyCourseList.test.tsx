import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmptyCourseList from './EmptyCourseList';

describe('<EmptyCourseList />', () => {
  test('it should mount', () => {
    render(<EmptyCourseList />);
    
    const emptyCourseList = screen.getByTestId('EmptyCourseList');

    expect(emptyCourseList).toBeInTheDocument();
  });
});