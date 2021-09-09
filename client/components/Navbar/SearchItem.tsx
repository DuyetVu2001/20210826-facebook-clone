import { DotsHorizontalIcon } from '@heroicons/react/solid';
import Image from 'next/image';

export default function SearchItem({ avatar }: any) {
	return (
		<div className="relative flex items-center justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg">
			<div className="flex items-center">
				<div className="relative w-9 h-9 cursor-pointer">
					<Image
						src={avatar}
						className="rounded-full"
						layout="fill"
						alt="content"
					/>
				</div>

				<p className="dark:text-dark-text ml-2.5 text-gray-800 text-sm">
					User Name
				</p>
			</div>

			{/* DOT */}
			<div className="dark:hover:bg-gray-600 grid place-items-center w-7 h-7 hover:bg-gray-300 rounded-full cursor-pointer">
				<DotsHorizontalIcon className="h-4 text-gray-500" />
			</div>
		</div>
	);
}
