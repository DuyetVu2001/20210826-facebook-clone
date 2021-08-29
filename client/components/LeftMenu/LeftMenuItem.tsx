import Image from 'next/image';

export default function LeftMenuItem({ src, avatar, image, content }: any) {
	return (
		<div className="dark:hover:bg-dark-third flex items-center p-1.5 rounded-lg cursor-pointer hover:bg-gray-200 ">
			<div className="flex items-center mr-3">
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
