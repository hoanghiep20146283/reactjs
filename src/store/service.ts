import { CoursesActionTypes } from './courses/types';

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
