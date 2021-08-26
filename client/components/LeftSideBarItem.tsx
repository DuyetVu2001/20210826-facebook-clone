import Image from 'next/image';

export default function LeftSideBarItem({ src, avatar, image, content }: any) {
	return (
		<div className="flex items-center p-1.5 cursor-pointer hover:bg-gray-200 rounded-lg">
			<div className="mr-3 flex items-center">
				<Image
					src={src}
					className={`${avatar ? 'rounded-full' : image && 'rounded-md'}`}
					width="36"
					height="36"
					layout="fixed"
					alt="content"
				/>
			</div>
			<p className="font-semibold text-sm">{content}</p>
		</div>
	);
}
