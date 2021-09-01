import { Field, InputType } from 'type-graphql';

@InputType()
export class CreatePostInput {
	@Field()
	title: string;

	@Field()
	content: string;

	@Field({ nullable: true })
	keyword?: string;

	@Field({ nullable: true })
	image?: string;
}
