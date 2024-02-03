import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { courseApi } from './courses/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/userSaga';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(courseApi.middleware).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
