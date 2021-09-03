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
import { useRouter } from 'next/router';
import {
	useGetCurrentUserQuery,
	useLogoutMutation,
} from '../../generated/graphql';
import Avatar from '../../public/avatar.jpg';
import Logo from '../../public/fb-logo.png';
import NavCenterItem from './NavCenterItem';
import NavRightItem from './NavRightItem';

export default function Navbar() {
	const router = useRouter();
	const [logoutMutation] = useLogoutMutation();
	const { data } = useGetCurrentUserQuery();

	const logout = async () => {
		const res = await logoutMutation();
		router.push('/login');
	};

	// Theme
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};
	// Theme

	return (
		<div className="dark:bg-dark-second dark:dark-second sticky z-40 top-0 flex justify-between items-center px-3 py-1.5 md:py-0 md:pt-0.5 bg-white shadow">
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

				<div className="dark:bg-dark-third flex items-center ml-2 p-2.5 rounded-full bg-gray-100">
					<SearchIcon className="h-5 text-gray-500 cursor-pointer" />
					<input
						className="xl:inline-block w-[200px] ml-1 outline-none placeholder-gray-500 cursor-text text-sm bg-transparent hidden"
						type="text"
						placeholder="Search Facebook"
					/>
				</div>
			</div>

			{/* center */}
			<div className="md:inline-flex items-center justify-center hidden">
				<NavCenterItem active Icon={HomeIcon} />
				<NavCenterItem Icon={DesktopComputerIcon} number="11" />
				<NavCenterItem Icon={ArchiveIcon} />
				<NavCenterItem Icon={UserGroupIcon} number="7" />
				<NavCenterItem Icon={ColorSwatchIcon} />
			</div>

			{/* right */}
			<div className="flex items-center ">
				<Link href="/personal">
					<a>
						<div className="xl:inline-flex dark:hover:bg-dark-third items-center mr-2 p-1 rounded-full hover:bg-gray-100 cursor-pointer hidden">
							<Image
								src={Avatar}
								className="cursor-pointer rounded-full"
								width="26"
								height="26"
								layout="fixed"
								alt="Logo"
							/>
							<p className="font-semibold text-sm px-1.5">
								{data?.getCurrentUser?.username}
							</p>
						</div>
					</a>
				</Link>
				<div className="flex items-center">
					<NavRightItem Icon={MenuIcon} />
					<NavRightItem Icon={ChatIcon} />
					<div onClick={logout}>
						<NavRightItem Icon={BellIcon} number="7" />
					</div>
					<div onClick={toggleTheme}>
						<NavRightItem Icon={ChevronDownIcon} />
					</div>
				</div>
			</div>
		</div>
	);
}
