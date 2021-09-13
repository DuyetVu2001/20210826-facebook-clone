import { DotsHorizontalIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
	useGetCurrentUserQuery,
	useGetUserPostsQuery,
} from '../../generated/graphql';
import Post from '../posts/Post';

export default function RightContent() {
	const router = useRouter();
	const { data: currentUserData } = useGetCurrentUserQuery();
	const id = router.query.id && currentUserData?.getCurrentUser?.id;

	const { data, loading, fetchMore } = useGetUserPostsQuery({
		variables: { id, limit: 4 },
		// component nao render boi cai Posts query, se rerender khi networkStatus thay doi, tuc la fetchMore
		notifyOnNetworkStatusChange: true,
	});

	// WHEN USER SCROLL TO BOTTOM PAGE ==> FETCH MORE DATA
	useEffect(() => {
		const loadMorePosts = () =>
			fetchMore({ variables: { cursor: data?.getUserPosts?.cursor } });
		const handleScroll = () => {
			if (
				window.innerHeight + document.documentElement.scrollTop !==
				document.documentElement.offsetHeight
			)
				return;
			if (!loading && data?.getUserPosts?.hasMore) {
				loadMorePosts();
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [data, fetchMore, loading]);

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
			{data?.getUserPosts?.paginatedPosts &&
				data?.getUserPosts?.paginatedPosts.map((post) => (
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
