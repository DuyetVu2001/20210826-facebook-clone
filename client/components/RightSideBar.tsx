import { MenuIcon, SearchIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Avatar from '../public/avatar.jpg';
import GroupImg1 from '../public/group-img-1.jpg';
import RightSideBarItem from './RightSideBarItem';

export default function RightSideBar() {
	return (
		<div className="fixed dark:text-dark-text right-0 top-20 2md:w-2/7 2lg:w-1/5 bottom-0 hidden 2md:block pl-1.5">
			<div className="h-full overflow-auto">
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
				<RightSideBarItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
				<RightSideBarItem src={GroupImg1} avatar content="Vũ Ngọc Duyệt" />
				<RightSideBarItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
				<RightSideBarItem src={GroupImg1} avatar content="Vũ Ngọc Duyệt" />
				<RightSideBarItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
			</div>
		</div>
	);
}
