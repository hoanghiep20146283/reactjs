import { combineReducers } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/reducer';
import { authorsReducer, selectedAuthorsSlice } from './authors/reducer';
import { userReducer } from './users/reducer';

export const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	user: userReducer,
	selectedAuthors: selectedAuthorsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
