import { DotsHorizontalIcon } from '@heroicons/react/solid';
import { ChatAlt2Icon, ShareIcon, FireIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Avatar from '../../public/avatar.jpg';

export default function Post(props: any) {
	const {
		avatar,
		username,
		groupImg,
		groupName,
		content,
		hashtag,
		postImg,
	}: any = props;

	return (
		<div className="dark:bg-dark-second dark:text-dark-text mt-4 rounded-lg bg-white shadow">
			{/* header */}
			<div className="flex items-center justify-between p-3">
				<div className="flex items-center">
					<div className="relative w-9 h-9 cursor-pointer">
						<Image
							src={groupImg ? groupImg : avatar || Avatar}
							className={`object-cover ${
								groupImg ? 'rounded-lg' : 'rounded-full'
							}`}
							layout="fill"
							alt="content"
						/>

						{groupImg && (
							<div className="absolute -bottom-2 -right-2 w-6 h-6">
								<Image
									src={avatar || Avatar}
									className={`object-cover rounded-full`}
									layout="fill"
									alt="content"
								/>
							</div>
						)}
					</div>

					<div className="ml-4 font-semibold">
						<p className="dark:text-dark-text text-gray-800 text-sm cursor-pointer hover:underline">
							{groupName ? groupName : username}
						</p>
						<p className="dark:text-gray-400 text-gray-500 text-xs cursor-pointer hover:underline">
							{groupName ? groupName : '2021'}
						</p>
					</div>
				</div>
				<div className="dark:hover:bg-dark-third grid place-items-center w-9 h-9 hover:bg-gray-200 rounded-full cursor-pointer">
					<DotsHorizontalIcon className="h-5 text-gray-500" />
				</div>
			</div>

			{/* Content */}
			<div className="px-3">
				<p className="text-blue-400 800 text-sm cursor-pointer hover:underline">
					#{hashtag}
				</p>
				<p className="text-sm">{content}</p>
			</div>

			<div className="relative w-full pb-[56.25%] mt-3">
				<Image
					src={postImg || Avatar}
					className="object-cover"
					layout="fill"
					alt="content"
				/>
			</div>

			{/* Action bar */}
			<div className="px-3">
				<div className="flex items-center justify-between py-2">
					<div className="">
						<p className="hover:underline text-sm text-gray-600 dark:text-dark-text cursor-pointer">
							2.3k
						</p>
					</div>
					<div className="flex items-center">
						<p className="hover:underline text-sm text-gray-600 dark:text-dark-text cursor-pointer">
							3k comments
						</p>
						<p className="hover:underline text-sm text-gray-600 dark:text-dark-text cursor-pointer ml-2">
							12 Shares
						</p>
					</div>
				</div>

				<div className="flex items-center border-t-2 border-gray-300 dark:border-dark-third py-1">
					<div className="flex-1 justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third rounded-md py-1 flex items-center">
						<FireIcon className="h-6 text-gray-600" />
						<p className="">Like</p>
					</div>
					<div className="flex-1 justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third rounded-md py-1 flex items-center">
						<ChatAlt2Icon className="h-6 text-gray-600" />
						<p className="">Comment</p>
					</div>
					<div className="flex-1 justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third rounded-md py-1 flex items-center">
						<ShareIcon className="h-6 text-gray-600" />
						<p className="">Share</p>
					</div>
				</div>
			</div>

			{/* Comments */}
		</div>
	);
}
