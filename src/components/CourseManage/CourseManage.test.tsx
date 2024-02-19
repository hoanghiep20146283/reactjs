import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@store/rootReducer';
import { MemoryRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/dom';
import CourseManage from './CourseManage';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const Wrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

describe('<CourseManage />', () => {
  test('it should mount', async () => {
    render(
      <MemoryRouter>
        <CourseManage />
      </MemoryRouter>,
      { wrapper: Wrapper });

    const courseManage = await waitFor(() => screen.getByTestId('CourseManage'));

    expect(courseManage).toBeDefined();
  });
});