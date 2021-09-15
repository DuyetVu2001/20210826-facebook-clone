import { HomeIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useContext } from 'react';
import { ChatContext } from '../../context/isDisPlayChat/IsDisPlayChat';
import Avatar from '../../public/avatar.jpg';
import ChatIcon from './ChatIcon';
import MessageItem from './MessageItem';

export default function Chat() {
	const { closeChat }: any = useContext(ChatContext);

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
				<MessageItem message="được số tiền vượt quá thu nhập trung 1" me />
				<MessageItem message="được số tiền vượt quá thu nhập trung" />
				<MessageItem message="được số tiền vượt " />
				<MessageItem message="được số tiền vượt quá thu nhập trung" me />
				<MessageItem message="được số tiền vượt quá thu nhập trung" />
				<MessageItem message="được số tiền vượt quá thu nhập trung" me />
				<MessageItem message="được số tiền vượt quá thu nhập trung" />
				<MessageItem message="được số tiền vượt quá thu nhập trung" />
				<MessageItem message="được số tiền vượt quá thu nhập trung" me />
				<MessageItem message="được số tiền vượt quá thu nhập trung" me />
				<MessageItem message="được số tiền vượt quá thu nhập trung" />
			</div>
			{/* CHAT */}
			<div className="flex items-center h-[52px] px-2 text-gray-400">
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
					/>
					<div>
						<ChatIcon Icon={HomeIcon} />
					</div>
				</div>
				<div className="flex-1">
					<ChatIcon Icon={HomeIcon} />
				</div>
			</div>
		</div>
	);
}
