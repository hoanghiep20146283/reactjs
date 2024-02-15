import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseInfo from './CourseInfo';
import { Course } from '@/store/courses/types';

describe('<CourseInfo />', () => {
  test('it should mount', () => {

    const course: Course = {
      id: "id",
      title: "title",
      description: "description",
      creationDate: "creationDate",
      authors: [],
      duration: 2,
    };

    render(<CourseInfo course={course} />);

    const courseInfo = screen.getByTestId('CourseInfo');

    expect(courseInfo).toBeDefined();
  });
});