import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@store/rootReducer';
import { MemoryRouter } from 'react-router-dom';
import { prettyDOM, waitFor } from '@testing-library/dom';
import App from './App';

// Mock the 'react-router-dom' module
const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    // Spread the actual implementation of 'react-router-dom'
    ...jest.requireActual('react-router-dom'),
    // Override the 'useNavigate' hook with the empty mocked function
    useNavigate: () => mockedUseNavigate,
}));

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);

describe('<App />', () => {

    afterEach(() => {
        window.localStorage.clear();
        mockedUseNavigate.mockClear();
    });

    test('Should mount login button', async () => {
        const app = render(
            <MemoryRouter initialEntries={["/courses"]}>
                <App />
            </MemoryRouter>,
            { wrapper: Wrapper });

        console.log(prettyDOM(app.container));
        const loginButton = await waitFor(() => screen.getByText('Login'));
        expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
        expect(loginButton).toBeDefined();
    });

    test('Should mount logout button', async () => {
        localStorage.setItem('bearerToken', 'test');
        const app = render(
            <MemoryRouter initialEntries={["/courses"]}>
                <App />
            </MemoryRouter>,
            { wrapper: Wrapper });

        console.log(prettyDOM(app.container));
        const logoutButton = await waitFor(() => screen.getByText('Logout'));
        expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
        expect(logoutButton).toBeDefined();
    });
});