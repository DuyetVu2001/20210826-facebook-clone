import Avatar from '../public/avatar.jpg';
import GroupImg1 from '../public/group-img-1.jpg';
import RightSideBarItem from './RightSideBarItem';

export default function RightSideBar() {
	return (
		<div className="fixed right-0 h-full hidden md:w-1/6 lg:block pl-1.5 overflow-auto overscrollBehavior">
			<div className=""></div>

			<RightSideBarItem src={Avatar} avatar content="Vũ Ngọc Duyệt" />
			<RightSideBarItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
			<RightSideBarItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
			<RightSideBarItem src={Avatar} story avatar content="Vũ Ngọc Duyệt" />
			<RightSideBarItem src={GroupImg1} avatar content="Vũ Ngọc Duyệt" />
		</div>
	);
}
