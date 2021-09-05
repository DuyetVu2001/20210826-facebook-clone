import { DotsHorizontalIcon } from '@heroicons/react/solid';
import Posts from '../Posts';

export default function RightContent() {
	return (
		<div className="flex-[10]">
			{/* POSTS */}
			<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white shadow">
				<p className="font-bold text-xl">Posts</p>
				<div className="flex items-center px-3 rounded-md text-gray-700 cursor-pointer bg-gray-200 hover:bg-gray-300">
					<DotsHorizontalIcon className="h-5" />
					<p className="leading-9 ml-1 font-medium text-sm">Filters</p>
				</div>
			</div>

			{/* LIST POSTS */}
			<Posts />
		</div>
	);
}
