import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import * as types from './types'
import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';

const coursesInitialState = [] as types.Course[];

const coursesReducer = (state = coursesInitialState, action: types.CoursesAction) => {
    switch (action.type) {
        case types.CoursesActionTypes.SAVE_COURSES: return action.payload;

        case types.CoursesActionTypes.ADD_COURSE: return [...state, action.payload];

        default:
            return state
    }
}

const asyncFunctionMiddleware = storeAPI => next => action => {
    // If the "action" is actually a function instead...
    if (typeof action === 'function') {
        // then call the function and pass `dispatch` and `getState` as arguments
        return action(storeAPI.dispatch, storeAPI.getState)
    }

    // Otherwise, it's a normal action - send it onwards
    return next(action)
}

const rootReducer = combineReducers({
    courses: coursesReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(asyncFunctionMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;