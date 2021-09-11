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
import { useContext, useState } from 'react';
import { ChatContext } from '../../context/isDisPlayChat/IsDisPlayChat';
import {
	GetCurrentUserDocument,
	GetCurrentUserQuery,
	useLogoutMutation,
} from '../../generated/graphql';
import useCheckAuth from '../../hooks/useCheckAuth';
import Avatar from '../../public/avatar.jpg';
import Logo from '../../public/fb-logo.png';
import NavCenterItem from './NavCenterItem';
import NavRightItem from './NavRightItem';
import SearchItem from './SearchItem';

export default function Navbar() {
	const router = useRouter();
	const [disPlaySearch, setDisPlaySearch] = useState(false);
	const { openChat }: any = useContext(ChatContext);
	const [logoutMutation] = useLogoutMutation();
	const { data: checkAuthData, loading: checkAuthLoading } = useCheckAuth();

	const logout = async () => {
		await logoutMutation({
			update(cache) {
				cache.writeQuery<GetCurrentUserQuery>({
					query: GetCurrentUserDocument,
					data: {
						getCurrentUser: null,
					},
				});
			},
		});

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
			<div className="relative z-10 flex items-center">
				{!disPlaySearch ? (
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
				) : (
					<div className="grid place-items-center	 w-10 h-10">
						<SearchIcon className="h-5 text-gray-500 cursor-pointer" />
					</div>
				)}

				<div
					className="dark:bg-dark-third flex items-center w-60 ml-2 p-2 rounded-full bg-gray-100"
					onClick={() => setDisPlaySearch(!disPlaySearch)}
				>
					{!disPlaySearch && (
						<SearchIcon className="h-5 text-gray-500 cursor-pointer" />
					)}
					<input
						className="xl:inline-block ml-2 outline-none placeholder-gray-500 cursor-text bg-transparent hidden"
						type="text"
						placeholder="Search Facebook"
					/>
				</div>
			</div>

			{/* SEARCH BOX */}
			{disPlaySearch && (
				<div className="dark:bg-dark-second absolute top-0 left-0 w-80 h-[500px] pt-14 px-2 rounded-lg bg-white shadow-2xl">
					<div className="flex items-center justify-between mt-4 mb-0.5 pl-2">
						<p className="dark:text-dark-text font-medium">Recent Searches</p>
						<p className="dark:hover:bg-gray-600 px-2 py-1.5 rounded-md text-main-color text-sm hover:bg-gray-100">
							Edit
						</p>
					</div>
					<SearchItem avatar={Avatar} />
					<SearchItem avatar={Avatar} />
					<SearchItem avatar={Avatar} />
					<SearchItem avatar={Avatar} />
					<SearchItem avatar={Avatar} />
					<SearchItem avatar={Avatar} />
				</div>
			)}

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
				{checkAuthLoading ? (
					'Loading...'
				) : (
					<Link href="/personal">
						<a>
							<div className="xl:inline-flex dark:hover:bg-dark-third items-center mr-2 p-1 rounded-full hover:bg-gray-100 cursor-pointer hidden">
								<Image
									src={checkAuthData?.getCurrentUser?.user.avatar || Avatar}
									className="cursor-pointer rounded-full"
									width="26"
									height="26"
									layout="fixed"
									alt="Logo"
								/>
								<p className="font-semibold text-sm px-1.5">
									{checkAuthData?.getCurrentUser?.user.username}
								</p>
							</div>
						</a>
					</Link>
				)}
				<div className="flex items-center">
					<NavRightItem Icon={MenuIcon} />
					<div onClick={openChat}>
						<NavRightItem Icon={ChatIcon} />
					</div>
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
