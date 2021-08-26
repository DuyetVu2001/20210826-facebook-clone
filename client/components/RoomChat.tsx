import { BellIcon, ChatIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Avatar from '../public/avatar.jpg';
import RightSideBarItem from './RightSideBarItem';

export default function RoomChat() {
	return (
		<div className="flex items-center justify-between bg-white px-3 rounded-lg mt-4 py-1">
			<div className="flex items-center h-10 px-2 border-2 border-indigo-200 rounded-full cursor-pointer hover:bg-gray-300">
				<VideoCameraIcon className="h-6 mr-1.5" />
				<p>Create Room</p>
			</div>
			<div className="flex items-center">
				<RightSideBarItem src={Avatar} avatar />
				<RightSideBarItem src={Avatar} avatar story />
				<RightSideBarItem src={Avatar} avatar />
				<RightSideBarItem src={Avatar} avatar story />
				<RightSideBarItem src={Avatar} avatar />
				<RightSideBarItem src={Avatar} avatar story />
				<RightSideBarItem src={Avatar} avatar />
				<RightSideBarItem src={Avatar} avatar story />
			</div>
		</div>
	);
}
