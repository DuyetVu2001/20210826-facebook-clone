import { ChatAlt2Icon, FireIcon, ShareIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDeletePostMutation } from '../../generated/graphql';
import useCheckAuth from '../../hooks/useCheckAuth';
import Avatar from '../../public/avatar.jpg';
import LikeSVG from '../../public/like.svg';
import Like from '../../public/like.gif';
import Haha from '../../public/haha.gif';
import Love from '../../public/love.gif';
import Wow from '../../public/wow.gif';
import Angry from '../../public/angry.gif';
import Sad from '../../public/sad.gif';
import Emoji from './Emoji';

export default function Post(props: any) {
	const {
		id,
		userId,
		avatar,
		username,
		groupImg,
		groupName,
		content,
		hashtag,
		postImg,
	}: any = props;

	const router = useRouter();
	const [isDisplayOptionBox, setIsDisplayOptionBox] = useState(false);
	const [deletePostMutation] = useDeletePostMutation();
	const { data: checkAuthData } = useCheckAuth();

	const handleDeletePost = async () => {
		try {
			deletePostMutation({
				variables: { id },
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="dark:bg-dark-second dark:text-dark-text mt-4 rounded-lg bg-white shadow">
			{/* HEADER */}
			<div className="relative flex items-center justify-between p-3">
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

					<div className="ml-2 font-semibold">
						<p className="dark:text-dark-text text-gray-800 text-sm cursor-pointer hover:underline">
							{groupName ? groupName : username}
						</p>
						<p className="dark:text-gray-400 text-gray-500 text-xs cursor-pointer hover:underline">
							{groupName ? groupName : '2021'}
						</p>
					</div>
				</div>

				{/* DOT */}
				<div
					className="dark:hover:bg-dark-third grid place-items-center w-9 h-9 hover:bg-gray-200 rounded-full cursor-pointer"
					onClick={() => setIsDisplayOptionBox(!isDisplayOptionBox)}
				>
					<DotsHorizontalIcon className="h-5 text-gray-500" />
				</div>

				{isDisplayOptionBox &&
					router.route === '/personal' &&
					userId === checkAuthData?.getCurrentUser?.id && (
						<p
							className="absolute -right-8 -bottom-5 cursor-pointer text-[salmon] shadow"
							onClick={handleDeletePost}
						>
							Cool delete button
						</p>
					)}
			</div>

			{/* CONTENT */}
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

			{/* ACTION BAR */}
			<div className="px-3">
				<div className="flex items-center justify-between py-2.5">
					<div className="flex items-center">
						<div className="relative w-[18px] h-[18px]">
							<Image
								src={LikeSVG}
								className={`object-cover rounded-full`}
								layout="fill"
								alt="content"
							/>
						</div>
						<p className="ml-2 hover:underline text-sm text-gray-600 dark:text-dark-text cursor-pointer">
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

				<div className="relative flex items-center border-t-[1px] border-gray-300 dark:border-dark-third py-1">
					<div className="flex-1 justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third rounded-md py-1 flex items-center">
						<FireIcon className="h-6 text-gray-600" />
						<p>Like</p>
					</div>

					{/* EMOJIS */}
					{/* <div className="absolute left-0 -top-14 flex items-center bg-white rounded-full shadow-md">
						<Emoji emoji={Like} />
						<Emoji emoji={Haha} />
						<Emoji emoji={Love} />
						<Emoji emoji={Wow} />
						<Emoji emoji={Sad} />
						<Emoji emoji={Angry} />
					</div> */}

					<div className="flex-1 justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third rounded-md py-1 flex items-center">
						<ChatAlt2Icon className="h-6 text-gray-600" />
						<p>Comment</p>
					</div>
					<div className="flex-1 justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third rounded-md py-1 flex items-center">
						<ShareIcon className="h-6 text-gray-600" />
						<p>Share</p>
					</div>
				</div>
			</div>

			{/* COMMENT */}
		</div>
	);
}
