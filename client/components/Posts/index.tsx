import { LIMIT } from '../../constants';
import { useListPostsQuery } from '../../generated/graphql';
import Post from './Post';

export default function Posts() {
	const { data } = useListPostsQuery({
		variables: {
			limit: LIMIT,
		},
	});

	return (
		<>
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
		</>
	);
}
