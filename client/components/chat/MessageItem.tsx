import Image from 'next/image';

export default function MessageItem({ message, me, avatar }: any) {
	return (
		<div className={`flex mb-0.5 ${me && 'justify-end'}`}>
			<div className="flex items-end max-w-[210px]">
				{!me && avatar && (
					<div className="relative w-7 h-7 mr-2">
						<Image
							src={avatar}
							className={`object-cover rounded-full`}
							layout="fill"
							alt="content"
						/>
					</div>
				)}

				<p
					className={`dark:bg-dark-third dark:text-dark-text px-3 py-1.5 rounded-2xl bg-gray-200 ${
						me &&
						'dark:bg-main-color dark:text-gray-50 bg-main-color text-gray-50 '
					}`}
				>
					{message}
				</p>
			</div>
		</div>
	);
}
