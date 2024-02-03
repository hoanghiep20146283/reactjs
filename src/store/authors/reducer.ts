import { createSlice } from '@reduxjs/toolkit';
import * as types from './types';

const AuthorsInitialState = [] as types.Author[];

export const authorsReducer = (
	state = AuthorsInitialState,
	action: types.AuthorsAction
) => {
	switch (action.type) {
		case types.AuthorsActionTypes.SAVE_AUTHORS:
			return action.payload;

		case types.AuthorsActionTypes.ADD_AUTHORS:
			return [...state, action.payload];

		case types.AuthorsActionTypes.DELETE_AUTHORS: {
			const modifiedState = [...state];
			return modifiedState.filter((Author) => Author.id !== action.payload);
		}

		default:
			return state;
	}
};

const initialSelectedAuthors: string[] = [];

export const selectedAuthorsSlice = createSlice({
	name: 'selectedAuthors',
	initialState: initialSelectedAuthors,
	reducers: {
		addAuthor: (selectedAuthors, action) => {
			if (!selectedAuthors.includes(action.payload)) {
				selectedAuthors.push(action.payload);
			}
		},
		clearAuthors: () => initialSelectedAuthors,
	},
});
