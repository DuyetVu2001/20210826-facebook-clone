import {
	ArchiveIcon,
	ColorSwatchIcon,
	DesktopComputerIcon,
	HomeIcon,
	MenuIcon,
	SearchIcon,
	UserGroupIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon, BellIcon, ChatIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Avatar from '../public/avatar.jpg';
import Logo from '../public/fb-logo.png';
import HeaderMiddleIcon from './HeaderMiddleIcon';
import HeaderRightIcon from './HeaderRightIcon';

export default function Header() {
	return (
		<div className="sticky z-40 top-0 flex justify-between items-center bg-white dark:dark-second shadow px-3 py-1.5 md:py-0 md:pt-0.5">
			{/* left */}
			<div className="flex items-center">
				<Image
					src={Logo}
					className="cursor-pointer"
					width="40"
					height="40"
					layout="fixed"
					alt="Logo"
				/>

				<div className="flex items-center ml-2 bg-gray-100 p-2 rounded-full">
					<SearchIcon className="h-5 text-gray-500 cursor-pointer" />
					<input
						className="bg-transparent placeholder-gray-500 placeholder- ml-1 outline-none hidden xl:inline-block cursor-text text-sm"
						type="text"
						placeholder="Search Facebook"
					/>
				</div>
			</div>

			{/* middle*/}
			<div className="items-center justify-center hidden md:inline-flex">
				<HeaderMiddleIcon active Icon={HomeIcon} />
				<HeaderMiddleIcon Icon={DesktopComputerIcon} number="11" />
				<HeaderMiddleIcon Icon={ArchiveIcon} />
				<HeaderMiddleIcon Icon={UserGroupIcon} number="7" />
				<HeaderMiddleIcon Icon={ColorSwatchIcon} />
			</div>

			{/* right */}
			<div className="flex items-center ">
				<div className="items-center mr-2 hidden xl:inline-flex hover:bg-gray-100 rounded-full cursor-pointer p-1">
					<Image
						src={Avatar}
						className="cursor-pointer rounded-full"
						width="26"
						height="26"
						layout="fixed"
						alt="Logo"
					/>
					<p className="font-semibold text-sm px-1.5">Ngọc Duyệt</p>
				</div>
				<div className="flex items-center">
					<HeaderRightIcon Icon={MenuIcon} />
					<HeaderRightIcon Icon={ChatIcon} />
					<HeaderRightIcon Icon={BellIcon} number="7" />
					<HeaderRightIcon Icon={ChevronDownIcon} />
				</div>
			</div>
		</div>
	);
}
