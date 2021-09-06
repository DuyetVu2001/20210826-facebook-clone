import { Arg, Ctx, ID, Mutation, Query, Resolver } from 'type-graphql';
import { COOKIE_NAME } from '../constants';
import { User } from '../entities/User';
import { Context } from '../types/Context';
import { LoginInput } from '../types/LoginInput';
import { RegisterInput } from '../types/RegisterInput';
import { UserMutationResponse } from '../types/UserMutationResponse';

@Resolver()
export class UserResolver {
	@Query((_return) => User, { nullable: true })
	async getCurrentUser(@Ctx() { req }: Context): Promise<User | null> {
		try {
			if (!req.session.userId) return null;
			const existingUser = await User.findOne(req.session.userId);
			if (!existingUser) return null;

			return existingUser;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	@Query((_return) => [User], { nullable: true })
	async listUsers(): Promise<User[] | null> {
		try {
			return await User.find();
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	@Mutation((_return) => UserMutationResponse)
	async register(
		@Arg('registerInput') { username, password }: RegisterInput
	): Promise<UserMutationResponse> {
		try {
			const existingUser = await User.findOne({ username });

			if (existingUser)
				return {
					code: 401,
					success: false,
					message: 'Username already exists!',
					errors: [
						{
							field: 'username',
							message: 'Username already exists!',
						},
					],
				};

			const newUser = User.create({ username, password });

			return {
				code: 201,
				success: true,
				message: 'User created successfully!',
				user: await newUser.save(),
			};
		} catch (error) {
			console.error(error);
			return {
				code: 500,
				success: false,
				message: `Internal server error ${error.message}`,
			};
		}
	}

	@Mutation((_return) => UserMutationResponse)
	async login(
		@Arg('loginInput') { username, password }: LoginInput,
		@Ctx() { req }: Context
	): Promise<UserMutationResponse> {
		try {
			const existingUser = await User.findOne({ username });
			const isCorrectPassword = existingUser?.password === password;

			if (!existingUser || !isCorrectPassword)
				return {
					code: 401,
					success: false,
					message: 'Incorrect username or password!',
					errors: [
						{
							field: 'loginInput',
							message: 'Incorrect username or password!',
						},
					],
				};

			// Create session and return cookie
			req.session.userId = existingUser.id;

			return {
				code: 200,
				success: true,
				message: 'Logged in successfully!',
				user: existingUser,
			};
		} catch (error) {
			console.error(error);
			return {
				code: 500,
				success: false,
				message: `Internal server error ${error.message}`,
			};
		}
	}

	@Mutation((_return) => Boolean)
	logout(@Ctx() { req, res }: Context): Promise<boolean> {
		return new Promise((resolve, _reject) => {
			res.clearCookie(COOKIE_NAME);

			req.session.destroy((error) => {
				if (error) {
					console.error('SESSION ERROR', error);
					resolve(false);
				}
				resolve(true);
			});
		});
	}

	@Mutation((_return) => UserMutationResponse)
	async deleteUser(
		@Arg('id', (_type) => ID) id: number
	): Promise<UserMutationResponse> {
		try {
			const existingUser = await User.findOne(id);

			if (!existingUser)
				return {
					code: 401,
					success: false,
					message: 'User does not exist!',
					errors: [
						{
							field: 'id',
							message: 'User does not exist!',
						},
					],
				};

			await User.delete(existingUser.id);

			return {
				code: 200,
				success: true,
				message: 'User deleted successfully!',
			};
		} catch (error) {
			console.error(error);
			return {
				code: 500,
				success: false,
				message: `Internal server error ${error.message}`,
			};
		}
	}
}
