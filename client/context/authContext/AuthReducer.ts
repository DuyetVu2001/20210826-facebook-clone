import {
	LOGIN_FAILURE,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGOUT,
} from '../constants';

const AuthReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case LOGIN_START:
			return {
				idLoading: true,
				isAuth: false,
				user: null,
			};

		case LOGIN_SUCCESS:
			return {
				idLoading: false,
				isAuth: true,
				user: payload,
			};

		case LOGIN_FAILURE:
			return {
				idLoading: false,
				isAuth: false,
				user: null,
			};

		case LOGOUT:
			return {
				idLoading: false,
				isAuth: false,
				user: null,
			};

		default:
			return state;
	}
};

export default AuthReducer;
