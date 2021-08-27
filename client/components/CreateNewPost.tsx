import { BellIcon, ChatIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Avatar from '../public/avatar.jpg';

export default function CreateNewPost() {
	return (
		<div className="bg-white px-3 rounded-lg shadow">
			<div className="flex items-center border-b-2 border-gray-200 py-2">
				<Image
					src={Avatar}
					className="cursor-pointer rounded-full"
					width="36"
					height="36"
					layout="fixed"
					alt="Logo"
				/>
				<input
					className="bg-gray-300 placeholder-gray-500 outline-none cursor-pointer text-sm h-9 rounded-full ml-1.5 px-4 flex-1 hover:bg-gray-400"
					type="text"
					placeholder="What's on your mind, Ngọc Duyệt?"
				/>
			</div>
			<div className="flex items-center py-2">
				<div className="flex flex-1 justify-center items-center hover:bg-gray-300 rounded-lg py-2 cursor-pointer">
					<VideoCameraIcon className="h-6 mr-1" />
					<p>Live Video</p>
				</div>
				<div className="flex flex-1 justify-center items-center hover:bg-gray-300 rounded-lg py-2 cursor-pointer">
					<BellIcon className="h-6 mr-1" />
					<p>Photo/Video</p>
				</div>
				<div className="flex flex-1 justify-center items-center hover:bg-gray-300 rounded-lg py-2 cursor-pointer">
					<ChatIcon className="h-6 mr-1" />
					<p>Feeling/Activity</p>
				</div>
			</div>
		</div>
	);
}
