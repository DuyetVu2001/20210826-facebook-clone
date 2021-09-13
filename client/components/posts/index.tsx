import Image from 'next/image';
import { useEffect } from 'react';
import { LIMIT } from '../../constants';
import { useListPostsQuery } from '../../generated/graphql';
import Loading from '../../public/loading.gif';
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
		<div>
			{data &&
				data.listPosts?.paginatedPosts.map((post) => (
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
				<div className="relative mx-auto w-6 h-6">
					<Image
						src={Loading}
						className={`object-cover rounded-full`}
						layout="fill"
						alt="content"
					/>
				</div>
			)}
		</div>
	);
}
