import { ChevronDownIcon } from '@heroicons/react/solid';
import Avatar from '../public/avatar.jpg';
import Friends from '../public/friends.png';
import GroupImg1 from '../public/group-img-1.jpg';
import Groups from '../public/groups.png';
import Memories from '../public/memories.png';
import LeftSideBarItem from './LeftSideBarItem';

export default function LeftSideBar() {
	return (
		<div className="fixed w-1/5 left-0 top-20 hidden bottom-0 2lg:block pl-1.5">
			<div className="h-full overflow-auto">
				<LeftSideBarItem src={Avatar} avatar content="Vũ Ngọc Duyệt" />
				<LeftSideBarItem src={Friends} content="Friends" />
				<LeftSideBarItem src={Groups} content="Groups" />
				<LeftSideBarItem src={Memories} content="Memories" />
				<LeftSideBarItem src={Friends} content="Friends" />
				<SeeMore />
				<p className="mx-1.5 pt-3 mb-1.5 mt-2 font-semibold text-gray-500 text-lg  border-t-2 border-gray-300">
					Your Shortcuts
				</p>
				<LeftSideBarItem
					src={GroupImg1}
					image
					content="Cộng đồng Front end(HTML/CSS/JS) Việt Nam"
				/>
				<LeftSideBarItem
					src={GroupImg1}
					image
					content="Cộng đồng Front end(HTML/CSS/JS) Việt Nam"
				/>
				<LeftSideBarItem
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
	<div className="flex items-center p-1.5 cursor-pointer hover:bg-gray-200 rounded-lg">
		<div className="bg-gray-300 w-8 h-8 mr-3 rounded-full grid place-items-center">
			<ChevronDownIcon className="h-5" />
		</div>
		<p className="font-semibold text-sm">See More</p>
	</div>
);
