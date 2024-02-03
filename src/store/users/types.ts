export type User = {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
};

export const enum UserActionTypes {
	REGISTER_USER = 'REGISTER_USER',
	REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
	REGISTER_USER_FAILED = 'REGISTER_USER_FAILED',
	SAVE_USER = 'SAVE_USERS',
	CLEAR_USER = 'CLEAR_USERS',
}

interface SaveUsers {
	type: UserActionTypes.SAVE_USER;
	payload: User;
}

interface ClearUser {
	type: UserActionTypes.CLEAR_USER;
}

export type UsersAction = SaveUsers | ClearUser;
