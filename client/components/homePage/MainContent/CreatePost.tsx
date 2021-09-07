import { BellIcon, ChatIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useState } from 'react';
import Avatar from '../../../public/avatar.jpg';
import CreatePostPopup from './CreatePostPopup';

export default function CreatePost() {
	const [isPopup, setIsPopup] = useState(false);

	return (
		<>
			{/* Popup */}
			{isPopup && <CreatePostPopup setIsPopup={setIsPopup} />}

			<div className="bg-white dark:bg-dark-second px-3 rounded-lg shadow mt-6">
				<div className="flex items-center border-b-2 border-gray-200 dark:border-dark-third py-2">
					<Image
						src={Avatar}
						className="cursor-pointer rounded-full"
						width="36"
						height="36"
						layout="fixed"
						alt="Logo"
					/>
					<p
						className="dark:bg-dark-third dark:text-gray-400 dark:hover:bg-gray-700 flex items-center text-gray-600 bg-gray-200 placeholder-gray-500 outline-none cursor-pointer h-9 rounded-full ml-1.5 px-4 flex-1 hover:bg-gray-300"
						onClick={() => setIsPopup(true)}
					>
						What&apos;s on your mind, Ngọc Duyệt?
					</p>
				</div>

				{/* Icons */}
				<div className="flex items-center py-2">
					<div className="flex flex-1 justify-center items-center hover:bg-gray-300 dark:hover:bg-dark-third rounded-lg py-2 cursor-pointer">
						<VideoCameraIcon className="h-7 mr-1 text-red-500" />
						<p className="dark:text-dark-text ">Live Video</p>
					</div>
					<div className="flex flex-1 justify-center items-center hover:bg-gray-300 dark:hover:bg-dark-third rounded-lg py-2 cursor-pointer">
						<BellIcon className="h-7 mr-1 text-green-500" />
						<p className="dark:text-dark-text ">Photo/Video</p>
					</div>
					<div className="flex flex-1 justify-center items-center hover:bg-gray-300 dark:hover:bg-dark-third rounded-lg py-2 cursor-pointer">
						<ChatIcon className="h-7 mr-1 text-yellow-500" />
						<p className="dark:text-dark-text ">Feeling/Activity</p>
					</div>
				</div>
			</div>
		</>
	);
}
