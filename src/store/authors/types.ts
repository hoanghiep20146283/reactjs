export type Author = {
	id: string;
	name: string;
};

export const enum AuthorsActionTypes {
	SAVE_AUTHORS = 'SAVE_AUTHORS',
	ADD_AUTHORS = 'ADD_AUTHORS',
	DELETE_AUTHORS = 'DELETE_AUTHORS',
}

interface SaveAuthors {
	type: AuthorsActionTypes.SAVE_AUTHORS;
	payload: Author[];
}

interface AddAuthor {
	type: AuthorsActionTypes.ADD_AUTHORS;
	payload: Author;
}

interface DeleteAuthor {
	type: AuthorsActionTypes.DELETE_AUTHORS;
	payload: string;
}

export type AuthorsAction = SaveAuthors | AddAuthor | DeleteAuthor;
