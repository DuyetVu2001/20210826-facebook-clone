import { ChevronDownIcon } from '@heroicons/react/solid';

interface HeaderNavItemProps {
	content: string;
	active?: boolean;
	downIcon?: boolean;
}

export default function HeaderNavItem({
	content,
	active,
	downIcon,
}: HeaderNavItemProps) {
	return (
		<div
			className={`mt-1 cursor-pointer ${
				active && 'border-b-4 border-main-color'
			}`}
		>
			<div
				className={`dark:hover:bg-dark-third dark:text-dark-text flex items-center px-4 rounded-md hover:bg-gray-100 text-gray-500 ${
					active &&
					'dark:text-main-color dark:hover:bg-transparent hover:bg-transparent text-main-color'
				}`}
			>
				<p className={`leading-[52px] font-medium text-sm`}>{content}</p>
				{downIcon && <ChevronDownIcon className="h-4 ml-0.5" />}
			</div>
		</div>
	);
}
