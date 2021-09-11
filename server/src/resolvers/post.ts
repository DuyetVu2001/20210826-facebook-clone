import {
	Arg,
	Ctx,
	FieldResolver,
	ID,
	Int,
	Mutation,
	Query,
	Resolver,
	Root,
	UseMiddleware,
} from 'type-graphql';
import { LessThan } from 'typeorm';
import { Post } from '../entities/Post';
import { User } from '../entities/User';
import { checkAuth } from '../middleware/checkAuth';
import { Context } from '../types/Context';
import { CreatePostInput } from '../types/CreatePostInput';
import { PaginatedPosts } from '../types/PaginatedPosts';
import { PostMutationResponse } from '../types/PostMutationResponse';
import { UpdatePostInput } from '../types/UpdatePostInput';

@Resolver((_of) => Post)
export class PostResolver {
	@FieldResolver((_return) => User)
	async user(@Root() root: Post): Promise<User | undefined | null> {
		try {
			return await User.findOne(root.userId);
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	@Query((_return) => PaginatedPosts, { nullable: true })
	async listPosts(
		@Arg('limit', (_type) => Int) limit: number,
		@Arg('cursor', { nullable: true }) cursor: Date
	): Promise<PaginatedPosts | null> {
		try {
			const allPosts = await Post.find({ order: { createdAt: 'DESC' } });
			const totalCount = allPosts.length;

			const findOptions: { [key: string]: any } = {
				order: { createdAt: 'DESC' },
				take: limit,
			};
			cursor && (findOptions.where = { createdAt: LessThan(cursor) });
			const paginatedPosts = await Post.find(findOptions);

			return {
				totalCount,
				cursor: paginatedPosts.slice(-1)[0].createdAt,
				hasMore: cursor
					? paginatedPosts.slice(-1)[0].createdAt.toString() !==
					  allPosts.slice(-1)[0].createdAt.toString()
					: paginatedPosts.length !== totalCount,
				paginatedPosts,
			};
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	@Query((_return) => Post, { nullable: true })
	async getPost(
		@Arg('id', (_type) => ID) id: number
	): Promise<Post | undefined | null> {
		try {
			return await Post.findOne(id);
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	@Mutation((_return) => PostMutationResponse)
	@UseMiddleware(checkAuth)
	async createPost(
		@Arg('createPostInput')
		{ title, content, keyword, image }: CreatePostInput,
		@Ctx() { req }: Context
	): Promise<PostMutationResponse> {
		try {
			const newPost = Post.create({
				title,
				content,
				keyword,
				image,
				userId: req.session.userId,
			});
			return {
				code: 201,
				success: true,
				message: 'Post created successfully!',
				post: await newPost.save(),
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

	@Mutation((_return) => PostMutationResponse)
	@UseMiddleware(checkAuth)
	async updatePost(
		@Arg('updatePostInput')
		{ id, title, content, keyword, image }: UpdatePostInput,
		@Ctx() { req }: Context
	): Promise<PostMutationResponse> {
		try {
			let oldPost = await Post.findOne(id);
			if (!oldPost)
				return {
					code: 401,
					success: false,
					message: 'Post not found!',
				};

			if (req.session.userId !== oldPost.userId)
				return { code: 401, success: false, message: 'Unauthenticated!' };

			oldPost.title = title;
			oldPost.content = content;
			keyword && (oldPost.keyword = keyword);
			image && (oldPost.image = image);

			return {
				code: 200,
				success: true,
				message: 'Post updated successfully!',
				post: await oldPost.save(),
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

	@Mutation((_return) => PostMutationResponse)
	@UseMiddleware(checkAuth)
	async deletePost(
		@Arg('id', (_type) => ID) id: number,
		@Ctx() { req }: Context
	): Promise<PostMutationResponse> {
		try {
			const existingPost = await Post.findOne(id);

			if (!existingPost)
				return {
					code: 401,
					success: false,
					message: 'Post does not exist!',
					errors: [
						{
							field: 'id',
							message: 'Post does not exist!',
						},
					],
				};

			if (req.session.userId !== existingPost.userId)
				return { code: 401, success: false, message: 'Unauthenticated!' };

			await Post.delete(existingPost.id);

			return {
				code: 200,
				success: true,
				message: 'Post deleted successfully!',
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
