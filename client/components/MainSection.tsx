import CreateNewPost from './CreateNewPost';
import PostList from './PostList';
import RoomChat from './RoomChat';

export default function MainSection() {
	return (
		<div className="2md:px-8 mx-auto 2md:mx-0 2lg:mx-auto 2md:w-5/7 2lg:w-3/5 max-w-[700px]">
			{/* Story */}

			{/* Create new post */}
			<CreateNewPost />

			{/* Room chat */}
			<RoomChat />

			{/* Post */}
			<PostList />
		</div>
	);
}
