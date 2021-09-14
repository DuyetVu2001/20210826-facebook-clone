import Image from 'next/image';

export default function DropdownMenuItem({
	LeftIcon,
	RightIcon,
	avatar,
	username,
	desc,
	descSm,
	content,
	borderBottom,
}: any) {
	return (
		<>
			<div className="flex items-center p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg">
				{LeftIcon ? (
					<div className="dark:bg-gray-600 grid place-items-center w-9 h-9 rounded-full bg-gray-300">
						<LeftIcon className="h-5" />
					</div>
				) : (
					avatar && (
						<div className="relative flex items-center w-[60px] h-[60px] rounded-full">
							<Image
								src={avatar}
								className="rounded-full object-cover"
								layout="fill"
								alt="avatar"
							/>
						</div>
					)
				)}
				<div className="ml-3">
					{content && (
						<p className="dark:text-dark-text text-gray-900 font-medium text-sm">
							{content}
						</p>
					)}
					{username && <p className="font-semibold">{username}</p>}
					{desc && (
						<p className="dark:text-gray-400 text-gray-500 text-sm">{desc}</p>
					)}
					{descSm && <p className="dark:text-gray-400 text-gray-500 text-xs">{descSm}</p>}
				</div>
				{RightIcon && (
					<div className="grid place-items-center w-9 ml-auto">
						<LeftIcon className="h-5" />
					</div>
				)}
			</div>

			{/* BORDER */}
			{borderBottom && (
				<div className="h-[1px] dark:bg-gray-500 m-2 bg-gray-300" />
			)}
		</>
	);
}
