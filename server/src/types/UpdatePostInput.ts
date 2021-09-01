import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class UpdatePostInput {
	@Field((_type) => ID)
	id: number;

	@Field()
	title: string;

	@Field()
	content: string;

	@Field({ nullable: true })
	keyword?: string;

	@Field({ nullable: true })
	image?: string;
}
