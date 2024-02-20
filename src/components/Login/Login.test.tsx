import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@store/rootReducer';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';
import { User } from '@store/users/types';
import { userSlice } from '@store/users/reducer';
jest.mock('@store/users/reducer', () => {
	const originUserReducerModule = jest.requireActual('@store/users/reducer');
	return {
		__esModule: true,
		...originUserReducerModule,
		login: user => async (user: User, { rejectWithValue }) => {
			return ({
				'payload': {
					'successful': true,
					'result': 'Bearer haVVdHOcXKQRItv16mXSWLSvsGChiMB3iMFBsn1qpBIddxWCQIWtV8P7y9eH...',
					'user': {
						'email': 'hoanghiep20179706@gmail.com',
						'name': 'hiep'
					}
				},
				'type': 'login'
			})
		}
	};
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
		thunk: true,
	}),
});

const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

const mockSetLocalStorage = jest.fn();
Object.defineProperty(window, "localStorage", {
	value: {
		setItem: mockSetLocalStorage,
	},
	writable: true,
});

describe('<Courses />', () => {
	test('Login should mount', async () => {
		render(
			<MemoryRouter>
				<Login />
			</MemoryRouter>
			, { wrapper: Wrapper });
		const login = await waitFor(() => screen.getByTestId('Login'));
		expect(login).toBeDefined();

		userEvent.type(screen.getByPlaceholderText("Type your Email.."), "hello");
		userEvent.type(screen.getByPlaceholderText("Type your Password.."), "123");
		userEvent.click(screen.getByRole("button"));
		await waitFor(() => expect(mockSetLocalStorage).toHaveBeenCalledTimes(1));
	});

	test('reducers test', () => {
		const previousState = {
			isAuth: false,
			name: '',
			email: '',
			token: '',
		};

		const action = {
			type: 'login',
			payload: {
			}
		}

		expect(userSlice.reducer(previousState, action)).toEqual({
			isAuth: false,
			name: '',
			email: '',
			token: '',
		})
	});
});