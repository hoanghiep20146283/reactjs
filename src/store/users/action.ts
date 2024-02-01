import * as types from './types';

export const setUserAction = (userData: types.User): types.UsersAction => ({
	type: types.UserActionTypes.SAVE_USER,
	payload: userData,
});

const clearUserAction = (payload) => ({
	type: types.UserActionTypes.CLEAR_USER,
});
