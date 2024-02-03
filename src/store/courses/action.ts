import { UnknownAction } from 'redux';
import * as types from './types';

export const addNewCourseAction = (
	courseData: types.Course
): UnknownAction => ({
	type: types.CoursesActionTypes.ADD_COURSE,
	payload: courseData,
});

const deleteCourseAction = (payload) => ({
	type: types.CoursesActionTypes.DELETE_COURSE,
	payload,
});
const saveCoursesAction = (payload) => ({
	type: types.CoursesActionTypes.SAVE_COURSES,
	payload,
});