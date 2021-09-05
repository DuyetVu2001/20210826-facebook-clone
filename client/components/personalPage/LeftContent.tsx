import { DotsHorizontalIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import ThaoAvatar from '../../public/thao-avatar.jpg';

export default function LeftContent() {
	let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<div className="flex-[7] mr-4">
			{/* INTRO */}
			<div className="p-3 rounded-lg bg-white shadow">
				<p className="font-bold text-xl">Intro</p>
				<div className="flex items-center mt-1 text-gray-500">
					<DotsHorizontalIcon className="h-5" />
					<p className="leading-9 ml-1 text-sm">
						Lives in{' '}
						<span className="font-medium text-gray-800 cursor-pointer hover:underline">
							Thái Bình
						</span>
					</p>
				</div>
			</div>

			{/* PHOTOS */}
			<div className=" mt-4 p-3 rounded-lg bg-white shadow">
				<div className="flex items-center justify-between">
					<p className="font-bold text-xl cursor-pointer hover:underline">
						Photos
					</p>
					<p className="text-main-color px-2 py-1 rounded-[3px] cursor-pointer hover:bg-gray-200">
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

			{/* FRIEND */}
			<div className=" mt-4 p-3 rounded-lg bg-white shadow">
				<div className="flex items-center justify-between">
					<p className="font-bold text-xl cursor-pointer hover:underline">
						Friends
					</p>
					<p className="text-main-color px-2 py-1 rounded-[3px] cursor-pointer hover:bg-gray-200">
						See All Friends
					</p>
				</div>
				<p className="text-gray-600">22 mutual friends</p>

				{/* LIST FRIENDS */}
				<div className="grid grid-cols-3 gap-x-3 gap-y-5 mt-4 mb-6">
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
							<p className="mt-0.5 text-sm font-medium text-gray-700 cursor-pointer hover:underline">
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
