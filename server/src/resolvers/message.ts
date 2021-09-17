import {
	Arg,
	Ctx,
	FieldResolver,
	ID,
	Mutation,
	// PubSub,
	// PubSubEngine,
	// Subscription,
	Query,
	Resolver,
	Root,
	UseMiddleware,
} from 'type-graphql';
import { Message } from '../entities/Message';
import { User } from '../entities/User';
import { checkAuth } from '../middleware/checkAuth';
import { Context } from '../types/Context';
import { MessageInput } from '../types/MessageInput';
// import { MessageSubscriptionResponse } from '../types/MessageSubscriptionResponse';

// import { PubSub as PubSubGQL } from 'graphql-subscriptions';
// import { subscribe } from 'graphql';

// const pubsub = new PubSubGQL();
// const channel = 'TEST';

@Resolver((_return) => Message)
export class MessageResolver {
	@FieldResolver((_return) => User)
	async user(@Root() root: Message): Promise<User | undefined | null> {
		try {
			return await User.findOne(root.userId);
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	@Query((_return) => [Message], { nullable: true })
	@UseMiddleware(checkAuth)
	async listMessages(
		@Arg('roomId', (_type) => ID) roomId: number
	): Promise<Message[] | null> {
		try {
			return await Message.find({
				where: { roomId },
				order: { createdAt: 'DESC' },
			});
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	// RETURN TYPE
	@Mutation((_return) => Message, { nullable: true })
	@UseMiddleware(checkAuth)
	async createMessage(
		// @PubSub() pubSub: PubSubGQL,
		@Arg('messageInput')
		{ message, roomId }: MessageInput,
		@Ctx() { req }: Context
	): Promise<Message | null> {
		try {
			const newMessage = Message.create({
				message,
				roomId,
				userId: req.session.userId,
			});

			// const payload = { message, roomId };
			// await pubSub.publish(channel, payload);

			await newMessage.save();

			if (!newMessage) return null;
			return newMessage;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	// @Subscription({ topics: channel })
	// messageSent(
	// 	@Root() { id, userId, roomId, message }: Message
	// ): MessageSubscriptionResponse {
	// 	console.log('Hello world');
	// 	return { id, userId, roomId, message };
	// }

	// @Subscription({
	// 	subscribe: () => pubsub.asyncIterator([channel]),
	// })
	// postCreated(
	// 	@Root() { id, userId, roomId, message }: Message
	// ): MessageSubscriptionResponse {
	// 	console.log('object');
	// 	return { id, userId, roomId, message };
	// 	// return {
	// 	// More on pubsub below
	// 	// subscribe: () => pubsub.asyncIterator(['POST_CREATED']),
	// 	// }
	// 	// };
	// }
}
