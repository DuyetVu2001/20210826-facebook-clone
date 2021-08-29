export default function NavCenterItem({ Icon, active, number }: any) {
	return (
		<div
			className={`md:py-2 xl:px-10 xl:py-3 dark:hover:bg-dark-third relative flex items-center mx-1 md:px-6 rounded-lg hover:bg-gray-200 cursor-pointer ${
				active && 'text-blue-500 border-b-4 border-blue-500'
			}`}
		>
			<Icon className={`h-7 ${active ? 'text-blue-500' : 'text-gray-500'}`} />
			<div
				className={`xl:top-1 xl:right-8 absolute md:right-4 md:top-0 place-items-center h-4 rounded-full text-xs text-white font-medium bg-red-600 ${
					number ? 'grid' : 'hidden'
				} ${number > 9 ? 'w-5' : 'w-4'}`}
			>
				{number > 9 ? '9+' : number}
			</div>
		</div>
	);
}
