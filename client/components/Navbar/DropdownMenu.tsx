import { ChevronDownIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Avatar from '../../public/avatar.jpg';
import DropdownMenuItem from "./DropdownMenuItem";
import DropdownMenuSecond from './DropdownMenuSecond';

function DropdownMenu({ toggleTheme, logout }: any) {
  const [toggleDropdownSecond, setToggleDropdownSecond] = useState(false);

	return (
		<div className="dark:bg-dark-second absolute top-10 right-0 max-h-[400px] w-[343px] p-2 rounded-md shadow bg-white overflow-auto">
			{!toggleDropdownSecond ? (
				<div>
					<DropdownMenuItem
						avatar={Avatar}
						username="Vũ Ngọc Duyệt"
						desc="See your profile"
						borderBottom
					/>
					<DropdownMenuItem
						LeftIcon={ChevronDownIcon}
						content="Give Feedback"
						descSm="Help us improve the new Facebook"
						borderBottom
					/>
					<div onClick={() => setToggleDropdownSecond(true)}>
						<DropdownMenuItem
							LeftIcon={ChevronDownIcon}
							RightIcon={ChevronDownIcon}
							content="Setting & Privacy"
						/>
					</div>
					<div onClick={() => setToggleDropdownSecond(true)}>
						<DropdownMenuItem
							LeftIcon={ChevronDownIcon}
							RightIcon={ChevronDownIcon}
							content="Help & Support"
						/>
					</div>
					<div onClick={toggleTheme}>
						<DropdownMenuItem
							LeftIcon={ChevronDownIcon}
							content="Switch theme"
						/>
					</div>
					<div onClick={logout}>
						<DropdownMenuItem LeftIcon={ChevronDownIcon} content="Logout" />
					</div>
				</div>
			) : (
				<DropdownMenuSecond setToggleDropdownSecond={setToggleDropdownSecond} />
			)}
		</div>
	);
}

export default DropdownMenu;
