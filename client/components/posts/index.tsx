import { useEffect } from 'react';
import { LIMIT } from '../../constants';
import { useListPostsQuery } from '../../generated/graphql';
import Post from './Post';

export default function Posts() {
	const { data, loading, fetchMore } = useListPostsQuery({
		variables: {
			limit: LIMIT,
		},
		// component nao render boi cai Posts query, se rerender khi networkStatus thay doi, tuc la fetchMore
		notifyOnNetworkStatusChange: true,
	});

	// WHEN USER SCROLL TO BOTTOM PAGE ==> FETCH MORE DATA
	useEffect(() => {
		const loadMorePosts = () =>
			fetchMore({ variables: { cursor: data?.listPosts?.cursor } });
		const handleScroll = () => {
			if (
				window.innerHeight + document.documentElement.scrollTop !==
				document.documentElement.offsetHeight
			)
				return;
			if (!loading && data?.listPosts?.hasMore) {
				loadMorePosts();
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [data, fetchMore, loading]);

	return (
		<div className="">
			{data &&
				data.listPosts?.paginatedPosts.map((post) => (
					<Post
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
