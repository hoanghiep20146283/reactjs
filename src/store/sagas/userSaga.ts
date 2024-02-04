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
		const { result, successful, errors } = yield call(
			sendRegisterUserRequest,
			action.payload
		);
		if (successful === true) {
			yield put({
				type: UserActionTypes.REGISTER_USER_SUCCESS,
				payload: result,
			});
		} else {
			yield put({
				type: UserActionTypes.REGISTER_USER_FAILED,
				payload: errors.join(', '),
			});
		}
	} catch (error: any) {
		yield put({
			type: UserActionTypes.REGISTER_USER_FAILED,
			payload: error,
		});
	}
}

const notify = (action) => {
	alert(action.payload);
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
	yield takeEvery(UserActionTypes.REGISTER_USER_SUCCESS, notify);
}

function* failRegisterSaga() {
	yield takeEvery(UserActionTypes.REGISTER_USER_FAILED, notify);
}

export default function* rootSaga() {
	yield all([registerSaga(), successRegisterSaga(), failRegisterSaga()]);
}
