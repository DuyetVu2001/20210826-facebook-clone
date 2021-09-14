import { ChevronDownIcon } from '@heroicons/react/solid';
import DropdownMenuItem from './DropdownMenuItem';

function DropdownMenuSecond({ setToggleDropdownSecond }: any) {
	return (
		<div>
			<div className="flex items-center">
				<div
					className="grid place-items-center m-3 hover:bg-gray-200 dark:hover:bg-dark-third w-9 h-9 rounded-full cursor-pointer"
					onClick={() => setToggleDropdownSecond(false)}
				>
					<ChevronDownIcon className="h-5" />
				</div>
				<p className="dark:text-dark-text text-2xl font-bold">
					Setting & Privacy
				</p>
			</div>

			<DropdownMenuItem LeftIcon={ChevronDownIcon} content="Setting" />
			<DropdownMenuItem LeftIcon={ChevronDownIcon} content="Privacy Checkup" />
			<div>
				<DropdownMenuItem
					LeftIcon={ChevronDownIcon}
					content="Privacy Shortcuts"
				/>
			</div>
			<div>
				<DropdownMenuItem LeftIcon={ChevronDownIcon} content="Language" />
			</div>
		</div>
	);
}

export default DropdownMenuSecond;
