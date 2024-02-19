import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@store/rootReducer';
import { MemoryRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/dom';
import CourseUpdate from './CourseUpdate';
import { FormProvider, useForm } from 'react-hook-form';

jest.mock('react-hook-form', () => ({
	...jest.requireActual('react-hook-form'),
	Controller: () => <></>,
	useForm: () => ({
		control: () => ({}),
		handleSubmit: () => jest.fn(),
	}),
	useFormContext: () => ({
		register: () => ({}),
		handleSubmit: () => jest.fn(),
	}),
}))

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

describe('<CourseUpdate />', () => {
  test('it should mount', async () => {
    const methods = useForm();
    render(
      <MemoryRouter>
        <FormProvider {...methods}>
          <form>
            <CourseUpdate />
          </form>
        </FormProvider>
      </MemoryRouter>,
      { wrapper: Wrapper });

    const courseUpdate = await waitFor(() => screen.getByTestId('CourseUpdate'));

    expect(courseUpdate).toBeDefined();
  });
});