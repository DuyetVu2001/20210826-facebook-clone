import { DotsHorizontalIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import ThaoAvatar from '../../public/thao-avatar.jpg';

export default function LeftContent({ province }: any) {
	let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<div className="2md:mr-4 2md:flex-[7] mt-4">
			{/* INTRO */}
			<div className="dark:bg-dark-second dark:text-dark-text p-3 rounded-lg bg-white shadow">
				<p className="font-bold text-xl">Intro</p>
				<div className="dark:text-dark-text flex items-center mt-1 text-gray-500">
					<DotsHorizontalIcon className="h-5" />
					<p className="leading-9 ml-1 text-sm">
						Lives in{' '}
						{province && (
							<span className="dark:text-dark-text font-medium text-gray-800 cursor-pointer hover:underline">
								{province}
							</span>
						)}
					</p>
				</div>
			</div>

			{/* PHOTOS */}
			<div className="dark:bg-dark-second dark:text-dark-text mt-4 p-3 rounded-lg bg-white shadow">
				<div className="flex items-center justify-between">
					<p className="font-bold text-xl cursor-pointer hover:underline">
						Photos
					</p>
					<p className="dark:hover:bg-dark-third dark:text-blue-400 text-main-color px-2 py-1 rounded-[3px] cursor-pointer hover:bg-gray-200">
						See All Photos
					</p>
				</div>

				{/* LIST FRIENDS IMG */}
				<div className="grid grid-cols-3 gap-1 mt-3 mb-2 rounded-lg overflow-hidden">
					{arrs.map((_, index) => (
						<div key={index} className="relative pb-[100%]">
							<Image
								src={ThaoAvatar}
								className="cursor-pointer object-cover"
								layout="fill"
								alt="Avatar"
							/>
						</div>
					))}
				</div>
			</div>

			{/* FRIENDS */}
			<div className="dark:bg-dark-second dark:text-dark-text mt-4 p-3 rounded-lg bg-white shadow">
				<div className="flex items-center justify-between">
					<p className="font-bold text-xl cursor-pointer hover:underline">
						Friends
					</p>
					<p className="dark:hover:bg-dark-third dark:text-blue-400 text-main-color px-2 py-1 rounded-[3px] cursor-pointer hover:bg-gray-200">
						See All Friends
					</p>
				</div>
				<p className="dark:text-gray-400 text-gray-600">22 mutual friends</p>

				{/* LIST FRIENDS */}
				<div className="grid grid-cols-3 gap-x-3 gap-y-7 mt-4 mb-6">
					{arrs.map((_, index) => (
						<div key={index}>
							<div className="relative pb-[100%]">
								<Image
									src={ThaoAvatar}
									className="cursor-pointer object-cover rounded-lg"
									layout="fill"
									alt="Avatar"
								/>
							</div>
							<p className="dark:text-dark-text mt-0.5 text-xs font-medium text-gray-700 cursor-pointer hover:underline">
								Ethan
							</p>
						</div>
					))}
				</div>
			</div>

			{/* FOOTER */}
			<p className=""></p>
		</div>
	);
}
