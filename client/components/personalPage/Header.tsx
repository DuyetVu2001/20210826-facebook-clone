import {
	ChatIcon,
	ChevronDownIcon,
	DotsHorizontalIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import Poster from '../../public/poster.jpg';
import ThaoAvatar from '../../public/thao-avatar.jpg';
import HeaderNavItem from './HeaderNavItem';

export default function Header() {
	return (
		<div className="relative bg-white shadow">
			<div className="max-w-[940px] mx-auto">
				<div className="relative">
					{/* Cover image */}
					<div className="relative rounded-br-lg rounded-bl-lg overflow-hidden pb-[37.2%]">
						<Image
							src={Poster}
							className="cursor-pointer object-cover"
							layout="fill"
							alt="Cover image"
						/>
					</div>

					{/* Avatar */}
					<div className="absolute -bottom-4 left-[50%] translate-x-[-50%] w-[168px] h-[168px] rounded-full border-4 border-white">
						<Image
							src={ThaoAvatar}
							className="cursor-pointer object-cover rounded-full"
							layout="fill"
							alt="Avatar"
						/>
						<div className="absolute w-8 h-8 bottom-2.5 right-1.5 rounded-full border-4 border-white bg-green-500" />
					</div>
				</div>

				<h2 className="text-center text-3xl font-bold my-6">Phương Thảo</h2>

				{/* Navigation */}
				<div className="flex justify-between max-w-[880px] mx-auto border-t-[1px] border-gray-300">
					<div className="flex">
						<HeaderNavItem content="Post" active />
						<HeaderNavItem content="About" />
						<HeaderNavItem content="Friends" />
						<HeaderNavItem content="Photos" />
						<HeaderNavItem content="Videos" />
						<HeaderNavItem content="Check-Ins" />
						<HeaderNavItem content="More" downIcon />
					</div>
					<div className="flex items-center space-x-2">
						<div className="flex items-center h-9 px-3 rounded-md text-gray-700 hover:bg-gray-300 bg-gray-200 cursor-pointer">
							<ChatIcon className="h-6 mr-1" />
							<p className="font-medium text-sm">Friends</p>
						</div>
						<div className="flex items-center h-9 px-3 rounded-md text-gray-100 hover:bg-blue-600 bg-main-color cursor-pointer">
							<ChatIcon className="h-6 mr-1" />
							<p className="font-medium text-sm">Messages</p>
						</div>
						<div className="flex items-center h-9 px-4 rounded-md text-gray-700 hover:bg-gray-300 bg-gray-200 cursor-pointer">
							<DotsHorizontalIcon className="h-5 mr-1" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
