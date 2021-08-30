import Image from 'next/image';

export default function RightMenuItem({
	src,
	avatar,
	image,
	content,
	story,
}: any) {
	return (
		<div className="flex items-center p-1.5 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg">
			<div
				className={`relative mr-3 flex items-center rounded-full ${
					story && 'border-2 border-blue-400'
				}`}
			>
				<Image
					src={src}
					className={`${avatar ? 'rounded-full' : image && 'rounded-md'}`}
					width="34"
					height="34"
					layout="fixed"
					alt="content"
				/>
				<div className="absolute w-3 h-3 bottom-0 -right-1 rounded-full border-2 border-white bg-green-600" />
			</div>
			<p className="font-semibold text-sm">{content}</p>
		</div>
	);
}
