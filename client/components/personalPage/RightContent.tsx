import { DotsHorizontalIcon } from '@heroicons/react/solid';
import Posts from '../posts';

export default function RightContent() {
	return (
		<div className="2md:flex-[10] mt-4">
			{/* POSTS */}
			<div className="dark:bg-dark-second dark:text-dark-text flex items-center justify-between px-3 py-2 rounded-lg bg-white shadow">
				<p className="font-bold text-xl">Posts</p>
				<div className="dark:bg-dark-third dark:hover:bg-gray-600 dark:text-dark-text flex items-center px-3 rounded-md text-gray-700 cursor-pointer bg-gray-200 hover:bg-gray-300">
					<DotsHorizontalIcon className="h-5" />
					<p className="leading-9 ml-1 font-medium text-sm">Filters</p>
				</div>
			</div>

			{/* LIST POSTS */}
			<Posts />
		</div>
	);
}
