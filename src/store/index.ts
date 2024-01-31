import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

const asyncFunctionMiddleware = (storeAPI) => (next) => (action) => {
	if (typeof action === 'function') {
		return action(storeAPI.dispatch, action);
	}

	return next(action);
};

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(asyncFunctionMiddleware),
});
