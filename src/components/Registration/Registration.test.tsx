import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@store/rootReducer';
import { MemoryRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/dom';
import Registration from './Registration';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const Wrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

describe('<Registration />', () => {
  test('it should mount', async () => {
    render(
      <MemoryRouter>
        <Registration />
      </MemoryRouter>,
      { wrapper: Wrapper });

    const registration = await waitFor(() => screen.getByTestId('Registration'));

    expect(registration).toBeDefined();
  });
});