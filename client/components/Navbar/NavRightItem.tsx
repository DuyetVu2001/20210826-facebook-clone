export default function NavRightItem({ Icon, number }: any) {
	return (
		<div className="dark:bg-dark-third relative p-2 mx-1 rounded-full hover:bg-gray-400 bg-gray-300 cursor-pointer">
			<Icon className="h-5" />
			<div
				className={`absolute -top-1.5 -right-1 place-items-center w-4 h-4 rounded-full text-xs text-white font-medium bg-red-600 ${
					number ? 'grid' : 'hidden'
				}`}
			>
				{number > 9 ? '9+' : number}
			</div>
		</div>
	);
}
