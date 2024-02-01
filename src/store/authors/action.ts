import * as types from './types';

export const addNewAuthorAction = (
	AuthorData: types.Author
): types.AuthorsAction => ({
	type: types.AuthorsActionTypes.ADD_AUTHORS,
	payload: AuthorData,
});

const deleteAuthorAction = (payload) => ({
	type: types.AuthorsActionTypes.DELETE_AUTHORS,
	payload,
});
const saveAuthorsAction = (payload) => ({
	type: types.AuthorsActionTypes.SAVE_AUTHORS,
	payload,
});
