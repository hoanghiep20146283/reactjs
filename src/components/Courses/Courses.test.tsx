import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@store/rootReducer';
import Courses from './Courses';
import { courseApi } from '@store/courses/reducer';
import { MemoryRouter } from 'react-router-dom';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware),
});

const Wrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

describe('<Courses />', () => {
  test('it should mount', () => {
    render(
      <MemoryRouter>
        <Courses />
      </MemoryRouter>,
      { wrapper: Wrapper });

    const courses = screen.getByTestId('Courses');

    expect(courses).toBeDefined();
  });
});