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

	test('Test user reducer', () => {
		const state = userSlice.reducer.apply({ courses: { queries: { 'getAllCourses(undefined)': { status: 'fulfilled', endpointName: 'getAllCourses', requestId: 'qeXrGaIenSTSgjt9MXjH3', startedTimeStamp: 1707186437428, data: { successful: true, result: [{ title: 'Angular', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of scrambled it to make a type specimen book. It has survived not only only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', creationDate: '20/03/2012', duration: 2.5, authors: ['Dave Haisenberg', ' Tony Ja'], id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467' }] }, fulfilledTimeStamp: 1707186437502 } }, mutations: {}, provided: { Courses: { __internal_without_id: ['getAllCourses(undefined)'] } }, subscriptions: { 'getAllCourses(undefined)': { qeXrGaIenSTSgjt9MXjH3: {} } }, config: { online: true, focused: false, middlewareRegistered: true, refetchOnFocus: false, refetchOnReconnect: false, refetchOnMountOrArgChange: false, keepUnusedDataFor: 60, reducerPath: 'courses', invalidationBehavior: 'delayed' } }, courseFilter: '', authors: [], user: { isAuth: false, name: '', email: '', token: '' }, selectedAuthors: [] }, { type: 'login/pending', meta: { arg: { email: 'hoanghiep20179706@gmail.com', password: '1' }, requestId: 'ZOoaE22m489KivH2aQpS4', requestStatus: 'pending' } });
		expect(state).toEqual({ courses: { queries: { 'getAllCourses(undefined)': { status: 'fulfilled', endpointName: 'getAllCourses', requestId: 'qeXrGaIenSTSgjt9MXjH3', startedTimeStamp: 1707186437428, data: { successful: true, result: [{ title: 'Angular', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of scrambled it to make a type specimen book. It has survived not only only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', creationDate: '20/03/2012', duration: 2.5, authors: ['Dave Haisenberg', ' Tony Ja'], id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467' }] }, fulfilledTimeStamp: 1707186437502 } }, mutations: {}, provided: { Courses: { __internal_without_id: ['getAllCourses(undefined)'] } }, subscriptions: { 'getAllCourses(undefined)': { qeXrGaIenSTSgjt9MXjH3: {} } }, config: { online: true, focused: false, middlewareRegistered: true, refetchOnFocus: false, refetchOnReconnect: false, refetchOnMountOrArgChange: false, keepUnusedDataFor: 60, reducerPath: 'courses', invalidationBehavior: 'delayed' } }, courseFilter: '', authors: [], user: { isAuth: false, name: '', email: '', token: '' }, selectedAuthors: [] });
	});

});
