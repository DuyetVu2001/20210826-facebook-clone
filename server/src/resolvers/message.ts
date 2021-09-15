import { Arg, Ctx, ID, Mutation, Query, Resolver } from 'type-graphql';
import { Message } from '../entities/Message';
import { Context } from '../types/Context';
import { MessageInput } from '../types/MessageInput';

@Resolver()
export class MessageResolver {
	@Query((_return) => [Message], { nullable: true })
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
	@Mutation((_return) => Boolean)
	async createMessage(
		@Arg('messageInput') { message, roomId }: MessageInput,
		@Ctx() { req }: Context
	): Promise<boolean> {
		try {
			const newMessage = Message.create({
				message,
				roomId,
				userId: req.session.userId,
			});

			await newMessage.save();

			if (!newMessage) return false;
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	}
}
