import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Courses from './Courses';

afterEach(cleanup)

describe('Courses component', () => {
  test('Should return Angular Course', async () => {
    render(<Courses />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Angular' },
    });

    expect(screen.getByTestId('Courses')).toBeDefined();
    const angularCourse = await screen.findByText('Angular');
    expect(angularCourse).toBeDefined();
  });

  test('Should not return Angular Course after filtered', async () => {
    render(<Courses />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Angular1' },
    });

    expect(screen.getByTestId('Courses')).toBeDefined();
    const angularCourse = await screen.findByText('Angular');
    expect(angularCourse).toBeNull();
  });
});
