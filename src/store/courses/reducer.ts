import * as types from './types';

const coursesInitialState = [] as types.Course[];

export const coursesReducer = (
	state = coursesInitialState,
	action: types.CoursesAction
) => {
	switch (action.type) {
		case types.CoursesActionTypes.SAVE_COURSES:
			return action.payload;

		case types.CoursesActionTypes.ADD_COURSE:
			return [...state, action.payload];

		case types.CoursesActionTypes.DELETE_COURSE:
			return [...state.filter((course) => course.id !== action.payload)];

		default:
			return state;
	}
};
