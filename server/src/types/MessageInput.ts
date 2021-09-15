import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class MessageInput {
	@Field()
	message: string;

	@Field((_type) => ID)
	roomId: number;
}
