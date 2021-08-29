import Posts from '../../../components/Posts';
import ChatRoomCreate from './ChatRoomCreate';
import NewPost from './NewPost';
import Story from './Story';

export default function MainContent() {
	return (
		<div className="2md:px-8 mx-auto 2md:mx-0 2lg:mx-auto 2md:w-5/7 2lg:w-3/5 max-w-[700px]">
			{/* Story lise */}
			<div className="flex space-x-2">
				<Story />
				<Story />
				<Story />
				<Story />
				<Story />
				<Story />
			</div>

			<NewPost />
			<ChatRoomCreate />
			<Posts />
		</div>
	);
}
