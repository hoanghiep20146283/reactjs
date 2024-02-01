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
