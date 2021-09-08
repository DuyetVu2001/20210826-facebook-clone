import { DotsHorizontalIcon } from '@heroicons/react/solid';
import { LIMIT } from '../../constants';
import { useListPostsQuery } from '../../generated/graphql';
import useCheckAuth from '../../hooks/useCheckAuth';
import Post from '../post';

export default function RightContent() {
	const { data: checkAuthData } = useCheckAuth();
	const { data: listPostsData } = useListPostsQuery({
		variables: {
			limit: LIMIT,
		},
	});

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
			{listPostsData &&
				listPostsData.listPosts?.paginatedPosts
					.filter((post) => post.userId === checkAuthData?.getCurrentUser?.id)
					.map((post) => (
						<Post
							key={post.id}
							id={post.id}
							userId={post.userId}
							avatar={post.user.avatar}
							username={post.user.username}
							content={post.content}
							hashtag={post.keyword}
							postImg={post.image}
							groupImg={post.image}
						/>
					))}
		</div>
	);
}
