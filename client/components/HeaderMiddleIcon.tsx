export default function HeaderMiddleIcon({ Icon, active, number }: any) {
	return (
		<div
			className={`relative flex items-center mx-1 xl:px-10 md:px-6 md:py-2 xl:py-3 hover:bg-gray-200 dark:hover:bg-dark-third cursor-pointer rounded-lg ${
				active && 'text-blue-500 border-b-4 border-blue-500'
			}`}
		>
			<Icon className={`h-7 ${active ? 'text-blue-500' : 'text-gray-500'}`} />
			<div
				className={`absolute md:right-4 md:top-0 xl:top-1 xl:right-8 ${
					number ? 'grid' : 'hidden'
				} ${
					number > 9 ? 'w-5' : 'w-4'
				} place-items-center bg-red-600 h-4 text-xs rounded-full text-white font-medium`}
			>
				{number > 9 ? '9+' : number}
			</div>
		</div>
	);
}
