import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Course } from './types';

export const courseApi = createApi({
	reducerPath: 'courses',
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
		getAllCourses: builder.query<Course[], string>({
			query: (input) => 'all',
		}),
	}),
});

export const { useGetAllCoursesQuery } = courseApi;
