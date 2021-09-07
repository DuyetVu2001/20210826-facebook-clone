import {
	DotsHorizontalIcon,
	SearchIcon,
	VideoCameraIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import Avatar from '../../../public/avatar.jpg';
import Friends from '../../../public/friends.png';
import GroupImg1 from '../../../public/group-img-1.jpg';
import RightMenuItem from './RightMenuItem';

export default function RightMenu() {
	return (
		<div className="fixed dark:text-dark-text right-0 top-20 2md:w-2/7 2lg:w-1/5 bottom-0 hidden 2md:block pl-1.5 pr-1">
			<div className="flex flex-col h-full">
				{/* Friend requests */}
				<div className="dark:bg-dark-second bg-white shadow rounded-lg mx-1.5 py-4 pl-4">
					<div className="flex items-center justify-between pr-1.5">
						<div className="flex items-center">
							<Image src={Friends} width="20" height="20" alt="Friends icon" />
							<p className="text-sm font-medium ml-2">Friend Requests</p>
						</div>
						<div className="dark:hover:bg-dark-third dark:text-dark-text flex items-center justify-center mx-0.5 hover:bg-gray-200 rounded-full w-8 h-8 text-gray-600">
							<DotsHorizontalIcon className="h-4" />
						</div>
					</div>

					<div className="dark:hover:bg-dark-third flex items-start mr-4 p-1.5 rounded-md hover:bg-gray-200 cursor-pointer">
						<Image
							src={Avatar}
							className="rounded-full"
							width="60"
							height="60"
							alt="Avatar icon"
						/>
						<div className="flex-1 ml-3">
							<div className="flex justify-between items-baseline">
								<p className="text-sm font-medium">Huy</p>
								<p className="dark:text-dark-text text-xs text-gray-500">6d</p>
							</div>
							<div className="flex items-center my-2">
								<Image
									src={Avatar}
									className="rounded-full"
									width="16"
									height="16"
									alt="Avatar icon"
								/>
								<p className="dark:text-dark-text text-xs text-gray-500 ml-1">
									1 mutual friend
								</p>
							</div>

							<div className="flex xl:flex-row flex-col">
								<div className="flex-1 grid place-items-center px-3 text-sm font-medium text-gray-100 rounded-md h-9 bg-main-color">
									Confirm
								</div>
								<div className="text-gray-900 flex-1 grid place-items-center px-3 text-sm font-medium rounded-md h-9 bg-gray-300 xl:ml-1.5 xl:mt-0 mt-1.5">
									Delete
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Border */}
				<div className="border-t-[1px] border-gray-300 mb-2 mt-4 mx-1.5" />

				{/* Contacts */}
				<div className="overflow-auto">
					<div className="pl-1.5 mb-2 flex items-center justify-between text-gray-500">
						<p className="font-semibold text-lg">Contacts</p>
						<div className="flex items-center">
							<div className="dark:hover:bg-dark-third dark:text-dark-text flex items-center justify-center mx-0.5 hover:bg-gray-200 rounded-full w-8 h-8">
								<VideoCameraIcon className="h-5" />
							</div>
							<div className="dark:hover:bg-dark-third dark:text-dark-text flex items-center justify-center mx-0.5 hover:bg-gray-200 rounded-full w-8 h-8">
								<SearchIcon className="h-5" />
							</div>
							<div className="dark:hover:bg-dark-third dark:text-dark-text flex items-center justify-center mx-0.5 hover:bg-gray-200 rounded-full w-8 h-8">
								<DotsHorizontalIcon className="h-5" />
							</div>
						</div>
					</div>

					<RightMenuItem src={Avatar} avatar content="Vũ Ngọc Duyệt" />
					<RightMenuItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
					<RightMenuItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
					<RightMenuItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
					<RightMenuItem src={GroupImg1} avatar content="Vũ Ngọc Duyệt" />
					<RightMenuItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
					<RightMenuItem src={GroupImg1} avatar content="Vũ Ngọc Duyệt" />
					<RightMenuItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
					<RightMenuItem src={GroupImg1} avatar content="Vũ Ngọc Duyệt" />
				</div>
			</div>
		</div>
	);
}
