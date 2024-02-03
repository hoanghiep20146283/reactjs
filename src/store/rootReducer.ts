import { combineReducers } from '@reduxjs/toolkit';
import { courseApi } from './courses/reducer';
import { authorsReducer, selectedAuthorsSlice } from './authors/reducer';
import { userSlice } from './users/reducer';
import { registerSlice } from './sagas/userSaga';
export const rootReducer = combineReducers({
	[courseApi.reducerPath]: courseApi.reducer,
	[registerSlice.reducerPath]: registerSlice.reducer,
	authors: authorsReducer,
	[userSlice.reducerPath]: userSlice.reducer,
	[selectedAuthorsSlice.reducerPath]: selectedAuthorsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
