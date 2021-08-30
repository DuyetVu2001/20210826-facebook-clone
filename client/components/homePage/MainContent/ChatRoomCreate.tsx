import { VideoCameraIcon } from '@heroicons/react/solid';
import Avatar from '../../../public/avatar.jpg';
import ChatRoomItem from './ChatRoomItem';

export default function ChatRoomCreate() {
	return (
		<div className="flex items-center justify-between bg-white dark:bg-dark-second rounded-lg mt-4 p-3 shadow">
			{/* Create chat room button */}
			<div className="flex items-center h-10 px-2 border-2 border-indigo-200 dark:border-dark-third rounded-full cursor-pointer hover:bg-gray-300">
				<VideoCameraIcon className="h-6 mr-1.5" />
				<p className="dark:text-blue-500">Create Room</p>
			</div>

			{/* List friend online */}
			<div className="flex items-center overflow-hidden">
				<ChatRoomItem src={Avatar} />
				<ChatRoomItem src={Avatar} story />
				<ChatRoomItem src={Avatar} />
				<ChatRoomItem src={Avatar} story />
				<ChatRoomItem src={Avatar} />
				<ChatRoomItem src={Avatar} story />
				<ChatRoomItem src={Avatar} />
				<ChatRoomItem src={Avatar} story />
				<ChatRoomItem src={Avatar} />
				<ChatRoomItem src={Avatar} story />
			</div>
		</div>
	);
}
