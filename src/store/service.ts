import { CoursesActionTypes } from './courses/types';
import { AuthorsActionTypes } from './authors/types';

const fetchCoursesRequest = () => ({
	type: CoursesActionTypes.SAVE_COURSES,
});

const fetchCoursesSuccess = (courses) => ({
	type: CoursesActionTypes.SAVE_COURSES,
	payload: courses,
});

export const fetchCoursesFailure = (error) => ({
	type: CoursesActionTypes.SAVE_COURSES,
	payload: error,
});

export const fetchAuthorsFailure = (error) => ({
	type: AuthorsActionTypes.SAVE_AUTHORS,
	payload: error,
});

export const deleteCourses = function (courseId: string) {
	return async (dispatch, action) => {
		try {
			const token = localStorage.getItem('bearerToken');

			if (!token) {
				console.error('No access token found in local storage.');
				return;
			}

			const response = await fetch(
				`http://localhost:4000/courses/${courseId}`,
				{
					method: 'DELETE',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				}
			);
			const courseResponses = await response.json();

			if (courseResponses.successful !== true) {
				throw new Error(`Error fetching data: ${response.statusText}`);
			}

			dispatch({
				type: CoursesActionTypes.DELETE_COURSE,
				payload: courseId,
			});
		} catch (error) {
			dispatch(fetchCoursesFailure(error));
		}
	};
};

export const fetchCourses = async (dispatch, action) => {
	try {
		const response = await fetch('http://localhost:4000/courses/all', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const courseResponses = await response.json();
		dispatch({
			type: CoursesActionTypes.SAVE_COURSES,
			payload: courseResponses.result,
		});
	} catch (error) {
		dispatch(fetchCoursesFailure(error));
	}
};

export const fetchAuthors = async (dispatch, action) => {
	try {
		const response = await fetch('http://localhost:4000/authors/all', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const authorResponses = await response.json();
		dispatch({
			type: AuthorsActionTypes.SAVE_AUTHORS,
			payload: authorResponses.result,
		});
	} catch (error) {
		dispatch(fetchAuthorsFailure(error));
	}
};
