import Image from 'next/image';

function ChatRoomItem({ src, story }: any) {
	return (
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
}

export default ChatRoomItem;
