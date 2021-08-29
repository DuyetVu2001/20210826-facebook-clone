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
import Logo from '../public/fb-logo.png';
import HeaderMiddleIcon from './HeaderMiddleIcon';
import HeaderRightIcon from './HeaderRightIcon';

export default function Header() {
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<div className="sticky z-40 top-0 flex justify-between items-center bg-white dark:bg-dark-second dark:dark-second shadow px-3 py-1.5 md:py-0 md:pt-0.5">
			{/* left */}
			<div className="flex items-center">
				<Link href="/">
					<a>
						<Image
							src={Logo}
							className="cursor-pointer"
							width="40"
							height="40"
							layout="fixed"
							alt="Logo"
						/>
					</a>
				</Link>

				<div className="flex items-center ml-2 bg-gray-100 dark:bg-dark-third p-2.5 rounded-full">
					<SearchIcon className="h-5 text-gray-500 cursor-pointer" />
					<input
						className="bg-transparent placeholder-gray-500 ml-1 w-[200px] outline-none hidden xl:inline-block cursor-text text-sm"
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
				<Link href="/personal">
					<a>
						<div className="items-center mr-2 hidden xl:inline-flex hover:bg-gray-100 dark:hover:bg-dark-third rounded-full cursor-pointer p-1">
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
					</a>
				</Link>
				<div className="flex items-center">
					<HeaderRightIcon Icon={MenuIcon} />
					<HeaderRightIcon Icon={ChatIcon} />
					<HeaderRightIcon Icon={BellIcon} number="7" />
					<div onClick={toggleTheme}>
						<HeaderRightIcon Icon={ChevronDownIcon} />
					</div>
				</div>
			</div>
		</div>
	);
}
