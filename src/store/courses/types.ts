export type Course = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
};

export const enum CoursesActionTypes {
	SAVE_COURSES = 'SAVE_COURSES',
	ADD_COURSE = 'ADD_COURSE',
	DELETE_COURSE = 'DELETE_COURSES',
}

interface SaveCourses {
	type: CoursesActionTypes.SAVE_COURSES;
	payload: Course[];
}

interface AddCourse {
	type: CoursesActionTypes.ADD_COURSE;
	payload: Course;
}

interface DeleteCourse {
	type: CoursesActionTypes.DELETE_COURSE;
	payload: string;
}

export type CoursesAction = SaveCourses | AddCourse | DeleteCourse;
