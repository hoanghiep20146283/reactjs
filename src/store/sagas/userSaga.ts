import { all, call, put, takeEvery } from 'redux-saga/effects';
import { UserActionTypes } from '../users/types';
import { useNavigate } from 'react-router-dom';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	loading: false,
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* registerUser(action) {
	try {
		const { result } = yield call(sendRegisterUserRequest, action.payload);
		yield put({ type: UserActionTypes.REGISTER_USER_SUCCESS, result });
	} catch (error: any) {
		yield put({
			type: UserActionTypes.REGISTER_USER_FAILED,
			message: error.message,
		});
	}
}

export const registerSlice = createSlice({
	name: 'register',
	initialState: INITIAL_STATE,
	reducers: {
		login: (state, action) => {
			switch (action.type) {
				case UserActionTypes.REGISTER_USER:
					return { loading: true };
				case UserActionTypes.REGISTER_USER_SUCCESS:
					return { loading: false };

				case UserActionTypes.REGISTER_USER_FAILED: {
					return { loading: false };
				}

				default:
					return { loading: true };
			}
		},
	},
});

const navigate = () => {
	const navigate = useNavigate();
	navigate('/login');
};

const sendRegisterUserRequest = async (newUser) => {
	const response = await fetch('http://localhost:4000/register', {
		method: 'POST',
		body: JSON.stringify(newUser),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return await response.json();
};

function* registerSaga() {
	yield takeEvery(UserActionTypes.REGISTER_USER, registerUser);
}

function* successRegisterSaga() {
	yield takeEvery(UserActionTypes.REGISTER_USER_SUCCESS, navigate);
}

export default function* rootSaga() {
	yield all([registerSaga(), successRegisterSaga()]);
}
