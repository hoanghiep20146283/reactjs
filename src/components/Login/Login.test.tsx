import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../../store/rootReducer';
import { Provider } from 'react-redux';
import { userSlice } from '../../store/users/reducer';

jest.mock("http://localhost:4000/login", () => ({
	getUserData: () => ({
		"successful": true,
		"result": "Bearer haVVdHOcXKQRItv16mXSWLSvsGChiMB3iMFBsn1qpBIddxWCQIWtV8P7y9eH...",
		"user": {
			"email": "hoanghiep20179706@gmail.com",
			"name": "hiep"
		}
	})
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

describe('<Login />', () => {
	test('Login should mount', () => {
		render(<Login />, { wrapper: Wrapper });
		expect(screen.getByTestId('Login')).toBeDefined();
	});

	test('Should display User name', async () => {
		render(<Login />, { wrapper: Wrapper });
		const userName = await screen.findByText("hiep");

		expect(userName).toBeTruthy();
	});
});
