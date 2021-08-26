export default function HeaderRightIcon({ Icon, number }: any) {
	return (
		<div className="relative p-2 bg-gray-300 rounded-full mx-1 hover:bg-gray-400 cursor-pointer">
			<Icon className="h-5" />
			<div
				className={`absolute -top-1.5 -right-1 ${
					number ? 'grid' : 'hidden'
				} place-items-center bg-red-600 w-4 h-4 text-xs rounded-full text-white font-medium`}
			>
				{number > 9 ? '9+' : number}
			</div>
		</div>
	);
}
