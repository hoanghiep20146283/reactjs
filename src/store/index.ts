import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { courseApi } from './courses/reducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(courseApi.middleware),
});
