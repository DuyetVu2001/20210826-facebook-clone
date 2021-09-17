import { HomeIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { ChatContext } from '../../context/isDisPlayChat/IsDisPlayChat';
import {
	useCreateMessageMutation,
	useGetCurrentUserQuery,
	useListMessagesQuery,
} from '../../generated/graphql';
import Avatar from '../../public/avatar.jpg';
import ChatIcon from './ChatIcon';
import MessageItem from './MessageItem';

export default function Chat() {
	const { closeChat }: any = useContext(ChatContext);
	const { data: currentUserData } = useGetCurrentUserQuery();
	const { data } = useListMessagesQuery({
		variables: { roomId: '1' },
		// pollInterval: 500,
	});

	console.log(data);

	const [createMessageMutation] = useCreateMessageMutation();
	const [message, setMessage] = useState('');

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			await createMessageMutation({
				variables: {
					messageInput: { message, roomId: '1' },
				},
			});
		} catch (error) {}

		setMessage('');
	};

	return (
		<div className="dark:bg-dark-second fixed bottom-0 right-16 w-80 flex flex-col h-[456px] rounded-t-lg bg-gray-50 shadow-xl">
			{/* HEAD */}
			<div className="flex items-center justify-between p-1 pr-2 shadow">
				<div className="dark:hover:bg-dark-third flex items-center p-1 rounded-[3px] hover:bg-gray-200 cursor-pointer">
					<div className="relative w-8 h-8">
						<Image
							src={Avatar}
							className={`object-cover rounded-full`}
							layout="fill"
							alt="content"
						/>
					</div>
					<p className="dark:text-dark-text ml-1.5 text-sm font-semibold">
						Vũ Ngọc Duyệt
					</p>
				</div>

				<div className="inline-flex items-center space-x-1 text-gray-400">
					<ChatIcon Icon={HomeIcon} />
					<ChatIcon Icon={HomeIcon} />
					<ChatIcon Icon={HomeIcon} />
					<div onClick={closeChat}>
						<ChatIcon Icon={HomeIcon} />
					</div>
				</div>
			</div>
			{/* BODY */}
			<div className="flex-1 flex flex-col-reverse overflow-auto px-2">
				{data?.listMessages?.length &&
					data?.listMessages?.map((message) => {
						let me = currentUserData?.getCurrentUser?.id === message.userId;
						return (
							<MessageItem
								key={message.id}
								message={message.message}
								avatar={message.user.avatar}
								me={me}
							/>
						);
					})}
			</div>
			{/* CHAT */}
			<form
				className="flex items-center h-[52px] px-2 text-gray-400"
				onSubmit={handleSubmit}
			>
				<div className="flex items-center space-x-1">
					<ChatIcon Icon={HomeIcon} />
					<ChatIcon Icon={HomeIcon} />
					<ChatIcon Icon={HomeIcon} />
				</div>
				<div className="dark:bg-dark-third flex items-center h-9 pl-3 pr-1 mx-1 rounded-3xl bg-gray-200">
					<input
						type="text"
						className="dark:text-dark-text w-full text-gray-900 outline-none bg-transparent"
						placeholder="Aa"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<div>
						<ChatIcon Icon={HomeIcon} />
					</div>
				</div>
				<button className="flex-1" type="submit">
					<ChatIcon Icon={HomeIcon} />
				</button>
			</form>
		</div>
	);
}
