import CreateNewPost from './CreateNewPost';
import RoomChat from './RoomChat';

export default function MainSection() {
	return (
		<div className="p-4 xl:w-1/2 xl:m-auto lg:w-2/3">
			{/* Story */}

			{/* Create new post */}
			<CreateNewPost />

			{/* Room chat */}
			<RoomChat />
			{/* Post */}
		</div>
	);
}
