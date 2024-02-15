import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	Course,
	CourseResponse,
	CreateCourseResponse,
	DeleteCourseResponse,
	FilterCoursesActionTypes,
} from './types';
import { createSlice } from '@reduxjs/toolkit';

const FilterInitialState = '';

export const courseFilterSlice = createSlice({
	name: 'courseFilter',
	initialState: FilterInitialState,
	reducers: {
		updateFilter: (state, action) => {
			return action.payload;
		},
		clearFilter: () => {
			return FilterInitialState;
		},
	},
});

export const courseApi = createApi({
	reducerPath: 'courses',
	tagTypes: ['Courses'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4000/courses/',
		prepareHeaders: (headers) => {
			headers.set(
				'Authorization',
				`Bearer ${localStorage.getItem('bearerToken')}`
			);
			return headers;
		},
	}),

	endpoints: (builder) => ({
		getAllCourses: builder.query<CourseResponse, Record<any, never>>({
			query: () => 'all',
			providesTags: () => [{ type: 'Courses', id: 123456 }],
		}),
		createCourse: builder.mutation<
			CreateCourseResponse,
			Partial<Course> & Pick<Course, 'id'>
		>({
			query: (course) => ({
				url: '/add',
				method: 'POST',
				body: course,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('bearerToken')}`,
				},
			}),
			transformResponse: (response: CreateCourseResponse) => response,
			transformErrorResponse: (response: any) => response?.data?.errors,
			invalidatesTags: () => [{ type: 'Courses' }],
		}),
		deleteCourse: builder.mutation<DeleteCourseResponse, string>({
			query: (id) => ({
				url: `/${id}`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('bearerToken')}`,
				},
			}),
			transformResponse: (response: DeleteCourseResponse) => response,
			transformErrorResponse: (response: any) => response?.data?.errors,
			invalidatesTags: (result, payload) => [{ type: 'Courses' }],
		}),
	}),
});

export const {
	useGetAllCoursesQuery,
	useCreateCourseMutation,
	useDeleteCourseMutation,
} = courseApi;
