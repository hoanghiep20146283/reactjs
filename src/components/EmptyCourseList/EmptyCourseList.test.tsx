import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@store/rootReducer';
import EmptyCourseList from './EmptyCourseList';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

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
  test('it should mount', () => {
		render(<EmptyCourseList />, { wrapper: Wrapper });
    
    const emptyCourseList = screen.getByTestId('EmptyCourseList');

    expect(emptyCourseList).toBeDefined();
  });
});