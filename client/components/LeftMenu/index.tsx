import { ChevronDownIcon } from '@heroicons/react/solid';
import Avatar from '../../public/avatar.jpg';
import Friends from '../../public/friends.png';
import GroupImg1 from '../../public/group-img-1.jpg';
import Groups from '../../public/groups.png';
import Memories from '../../public/memories.png';
import LeftMenuItem from './LeftMenuItem';

export default function LeftMenu() {
	return (
		<div className="2lg:block fixed left-0 top-20 bottom-0 w-1/5 pl-1.5 dark:text-dark-text hidden">
			<div className="h-full overflow-auto">
				<LeftMenuItem src={Avatar} avatar content="Vũ Ngọc Duyệt" />
				<LeftMenuItem src={Friends} content="Friends" />
				<LeftMenuItem src={Groups} content="Groups" />
				<LeftMenuItem src={Memories} content="Memories" />
				<LeftMenuItem src={Friends} content="Friends" />
				<SeeMore />
				<p className="dark:border-dark-third mx-1.5 mb-1.5 mt-2 pt-3 border-t-2 font-semibold text-gray-500 text-lg border-gray-300">
					Your Shortcuts
				</p>
				<LeftMenuItem
					src={GroupImg1}
					image
					content="Cộng đồng Front end(HTML/CSS/JS) Việt Nam"
				/>
				<LeftMenuItem
					src={GroupImg1}
					image
					content="Cộng đồng Front end(HTML/CSS/JS) Việt Nam"
				/>
				<LeftMenuItem
					src={GroupImg1}
					image
					content="Cộng đồng Front end(HTML/CSS/JS) Việt Nam"
				/>
				<SeeMore />
			</div>
		</div>
	);
}

const SeeMore = () => (
	<div className="dark:hover:bg-dark-third flex items-center rounded-lg p-1.5 cursor-pointer hover:bg-gray-200">
		<div className="dark:bg-dark-second grid place-items-center w-8 h-8 mr-3 rounded-full bg-gray-300">
			<ChevronDownIcon className="h-5" />
		</div>
		<p className="font-semibold text-sm">See More</p>
	</div>
);
