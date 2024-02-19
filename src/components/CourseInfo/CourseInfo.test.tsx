import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@store/rootReducer';
import { MemoryRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/dom';
import CourseInfo from './CourseInfo';

const courseDetail = {
  "title": "Angular",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of scrambled it to make a type specimen book. It has survived not only only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "creationDate": "20/03/2012",
  "duration": 2.5,
  "authors": [
    "Dave Haisenberg",
    " Tony Ja"
  ],
  "id": "66cc289e-6de9-49b2-9ca7-8b4f409d6467"
}

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

describe('<CourseInfo />', () => {
  test('it should mount', async () => {
    render(
      <MemoryRouter>
        <CourseInfo course={courseDetail} />
      </MemoryRouter>,
      { wrapper: Wrapper });

    const courseInfo = await waitFor(() => screen.getByTestId('CourseInfo'));

    expect(courseInfo).toBeDefined();
  });
});