import { DotsHorizontalIcon } from '@heroicons/react/solid';
import { useGetCurrentUserQuery } from '../../generated/graphql';
import Post from '../posts/Post';

export default function RightContent() {
	const { data, loading } = useGetCurrentUserQuery();

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
			{data?.getCurrentUser?.userPosts &&
				data.getCurrentUser?.userPosts.map((post) => (
					<Post
						id={post.id}
						userId={post.userId}
						key={post.id}
						avatar={post.user.avatar}
						username={post.user.username}
						content={post.content}
						hashtag={post.keyword}
						postImg={post.image}
						groupImg={post.image}
					/>
				))}
			{loading && (
				<div>
					<h1>Loading...</h1>
				</div>
			)}
		</div>
	);
}
