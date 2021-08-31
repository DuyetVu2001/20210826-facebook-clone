import { User } from '../entities/User';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { UserMutationResponse } from '../types/UserMutationResponse';
import { RegisterInput } from '../types/RegisterInput';
import { Context } from '../types/Context';

@Resolver()
export class UserResolver {
	@Mutation((_return) => UserMutationResponse)
	async register(
		@Arg('registerInput') { username, password }: RegisterInput
	): Promise<UserMutationResponse> {
		try {
			const existingUser = await User.findOne({ username });

			if (existingUser)
				return {
					code: 400,
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
				user: await User.save(newUser),
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
		@Arg('registerInput') { username, password }: RegisterInput,
		@Ctx() { req }: Context
	): Promise<UserMutationResponse> {
		try {
			const existingUser = await User.findOne({ username });
			const isCorrectPassword = existingUser?.password === password;

			if (!existingUser || !isCorrectPassword)
				return {
					code: 400,
					success: false,
					message: 'Incorrect username or password!',
					errors: [
						{
							field: 'registerInput',
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

	@Mutation((_return) => UserMutationResponse)
	async deleteUser(@Arg('id') id: number): Promise<UserMutationResponse> {
		try {
			const existingUser = await User.findOne({ id });

			if (!existingUser)
				return {
					code: 400,
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
