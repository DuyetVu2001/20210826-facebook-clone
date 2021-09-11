import { User } from '../entities/User';
import { Field, ObjectType } from 'type-graphql';
import { Post } from '../entities/Post';

@ObjectType()
export class UserPosts {
	@Field()
	user!: User;

	@Field((_type) => [Post])
	userPosts!: Post[];
}
