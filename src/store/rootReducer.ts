import { combineReducers } from '@reduxjs/toolkit';
import { courseApi, courseFilterSlice } from './courses/reducer';
import { authorsReducer, selectedAuthorsSlice } from './authors/reducer';
import { userSlice } from './users/reducer';

export const rootReducer = combineReducers({
	[courseApi.reducerPath]: courseApi.reducer,
	[courseFilterSlice.reducerPath]: courseFilterSlice.reducer,
	authors: authorsReducer,
	[userSlice.reducerPath]: userSlice.reducer,
	[selectedAuthorsSlice.reducerPath]: selectedAuthorsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
