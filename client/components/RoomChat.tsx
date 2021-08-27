import { VideoCameraIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Avatar from '../public/avatar.jpg';

export default function RoomChat() {
	return (
		<div className="flex items-center justify-between bg-white rounded-lg mt-4 p-3 shadow">
			<div className="flex items-center h-10 px-2 border-2 border-indigo-200 rounded-full cursor-pointer hover:bg-gray-300">
				<VideoCameraIcon className="h-6 mr-1.5" />
				<p>Create Room</p>
			</div>
			<div className="flex items-center overflow-hidden">
				<IconChat src={Avatar} />
				<IconChat src={Avatar} story />
				<IconChat src={Avatar} />
				<IconChat src={Avatar} story />
				<IconChat src={Avatar} />
				<IconChat src={Avatar} story />
				<IconChat src={Avatar} />
				<IconChat src={Avatar} story />
				<IconChat src={Avatar} />
				<IconChat src={Avatar} story />
			</div>
		</div>
	);
}

const IconChat = ({ src, story }: any) => (
	<div
		className={`mx-1 cursor-pointer filter hover:contrast-50 relative flex items-center rounded-full ${
			story && 'border-2 border-blue-400'
		}`}
	>
		<Image
			src={src}
			className={`rounded-full`}
			width="34"
			height="34"
			layout="fixed"
			alt="content"
		/>
		<div className="absolute w-3 h-3 bottom-0 -right-1 rounded-full border-2 border-white bg-green-600" />
	</div>
);
