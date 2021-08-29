import {
	ArchiveIcon,
	ColorSwatchIcon,
	DesktopComputerIcon,
	HomeIcon,
	MenuIcon,
	SearchIcon,
	UserGroupIcon,
} from '@heroicons/react/outline';
import { BellIcon, ChatIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from '../public/avatar.jpg';
import Poster from '../public/poster.jpg';
import ThaoAvatar from '../public/thao-avatar.jpg';
import HeaderMiddleIcon from './HeaderMiddleIcon';
import HeaderRightIcon from './HeaderRightIcon';

export default function HeaderPersonal() {
	return (
		<div className="relative bg-white">
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
				<div className=""></div>
			</div>
		</div>
	);
}
