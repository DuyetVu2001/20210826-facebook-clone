import { gql } from '@apollo/client';

export const loginMutation = gql`
	mutation Login($loginInput: LoginInput!) {
		login(loginInput: $loginInput) {
			code
			success
			message
			user {
				id
				username
				avatar
			}
			errors {
				field
				message
			}
		}
	}
`;
