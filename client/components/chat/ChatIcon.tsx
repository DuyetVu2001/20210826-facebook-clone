export default function ChatIcon({ Icon }: any) {
	return (
		<div
			className={`dark:hover:bg-dark-third grid place-items-center w-[26px] h-[26px] rounded-full hover:bg-gray-200 cursor-pointer`}
		>
			<Icon className={`h-5`} />
		</div>
	);
}
