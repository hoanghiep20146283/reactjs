import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@store/rootReducer';
import { courseApi } from '@store/courses/reducer';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

// jest.mock('@store/users/reducer', () => {
// 	const originUserReducerModule = jest.requireActual('@store/users/reducer');
// 	return {
// 		__esModule: true,
// 		...originUserReducerModule,
// 		login: user => ({
// 			'payload': {
// 				'successful': true,
// 				'result': 'Bearer haVVdHOcXKQRItv16mXSWLSvsGChiMB3iMFBsn1qpBIddxWCQIWtV8P7y9eH...',
// 				'user': {
// 					'email': 'hoanghiep20179706@gmail.com',
// 					'name': 'hiep'
// 				}
// 			},
// 			'type': 'login'
// 		})
// 	};
// });

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockUsedNavigate,
}));

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(courseApi.middleware),
});

// Creating a Wrapper. 
// This component will wrap the Login component with Provider and apply a mocked state
const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

describe('<Courses />', () => {
	test('Login should mount', () => {
		render(
			<MemoryRouter>
				<Login />
			</MemoryRouter>
			, { wrapper: Wrapper });
		expect(screen.getByTestId('Login')).toBeDefined();
	});
});