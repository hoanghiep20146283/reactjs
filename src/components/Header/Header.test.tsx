import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@store/rootReducer';
import { MemoryRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/dom';
import Header from './Header';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);

describe('<Header />', () => {
    test('it should mount', async () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,
            { wrapper: Wrapper });

        const header = await waitFor(() => screen.getByTestId('Header'));

        expect(header).toBeDefined();
    });
});