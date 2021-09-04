import {
	LOGIN_FAILURE,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGOUT,
} from '../constants';

export const loginStart = () => ({
	type: LOGIN_START,
});

export const loginSuccess = (user: any) => ({
	type: LOGIN_SUCCESS,
	payload: user,
});

export const loginFailure = () => ({
	type: LOGIN_FAILURE,
});

export const logout = () => ({
	type: LOGOUT,
});
