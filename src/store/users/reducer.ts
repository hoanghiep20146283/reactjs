import * as types from './types';

const UsersInitialState: types.User = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = (
	state = UsersInitialState,
	action: types.UsersAction
) => {
	switch (action.type) {
		case types.UserActionTypes.SAVE_USER:
			return action.payload;

		case types.UserActionTypes.CLEAR_USER: {
			return UsersInitialState;
		}

		default:
			return state;
	}
};
