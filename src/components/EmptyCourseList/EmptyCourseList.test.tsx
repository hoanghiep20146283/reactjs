import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@store/rootReducer';
import EmptyCourseList from './EmptyCourseList';

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware(),
});

// Creating a Wrapper. 
// This component will wrap the Login component with Provider and apply a mocked state
const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

describe('<EmptyCourseList />', () => {
  test('it should mount', async () => {
		render(<EmptyCourseList />, { wrapper: Wrapper });
    
    const emptyCourseList = await waitFor(() => screen.getByTestId('EmptyCourseList'));

		expect(emptyCourseList).toBeDefined();
  });
});