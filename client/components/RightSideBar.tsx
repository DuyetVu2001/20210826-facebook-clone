import { MenuIcon, SearchIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Avatar from '../public/avatar.jpg';
import GroupImg1 from '../public/group-img-1.jpg';
import RightSideBarItem from './RightSideBarItem';

export default function RightSideBar() {
	return (
		<div className="fixed right-0 h-full hidden lg:w-1/4 xl:w-1/6  lg:block pl-1.5">
			<div className="pl-1.5 pr-4 mb-2 flex items-center justify-between text-gray-500">
				<p className="font-semibold text-lg">Contacts</p>
				<div className="flex items-center space-x-3">
					<VideoCameraIcon className="h-6" />
					<SearchIcon className="h-6" />
					<MenuIcon className="h-6" />
				</div>
			</div>

			<RightSideBarItem src={Avatar} avatar content="Vũ Ngọc Duyệt" />
			<RightSideBarItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
			<RightSideBarItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
			<RightSideBarItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
			<RightSideBarItem src={GroupImg1} avatar content="Vũ Ngọc Duyệt" />
		</div>
	);
}
