import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as types from './types';

const UsersInitialState: types.User = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState: UsersInitialState,
	reducers: {
		login: (state, action) => {
			switch (action.type) {
				case types.UserActionTypes.SAVE_USER:
					return action.payload;

				case types.UserActionTypes.CLEAR_USER: {
					return UsersInitialState;
				}

				default:
					return state;
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			// Bật trạng thái loading
			state.isAuth = true;
			state.token = action.payload.result;
			state.name = action.payload.user.name;
			state.email = action.payload.user.email;
		});
		return;
	},
});

export const login = createAsyncThunk(
	'login',
	async (user: types.User, { rejectWithValue }) => {
		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const loginResponse = await response.json();
		if (
			!loginResponse ||
			!loginResponse.result ||
			!loginResponse.result.startsWith('Bearer')
		) {
			rejectWithValue(loginResponse);
		}
		return loginResponse;
	}
);
