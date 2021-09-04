import { createContext, useEffect, useReducer } from 'react';
import { useGetCurrentUserQuery } from '../../generated/graphql';
import { loginSuccess } from './AuthActions';
import AuthReducer from './AuthReducer';

const INIT_STATE = {
	idLoading: false,
	isAuth: false,
	user: null,
};

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(AuthReducer, INIT_STATE);
	// const { data } = useGetCurrentUserQuery();

	// useEffect(() => {
	// 	dispatch(loginSuccess(data?.getCurrentUser));
	// }, [data?.getCurrentUser]);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
