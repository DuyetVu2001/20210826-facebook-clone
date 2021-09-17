import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class MessageSubscriptionResponse {
	@Field()
	id: number;

	@Field()
	userId: number;

	@Field()
	roomId: number;

	@Field()
	message: string;
}
