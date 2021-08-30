import Image from 'next/image';
import Avatar from '../../../public/avatar.jpg';

export default function Story() {
	return (
		<div className="relative flex-1 rounded-xl overflow-hidden hover:grayscale-[0.3]">
			<div className="pb-[178%] filter transition hover:scale-[102%]">
				<Image
					src={Avatar}
					className="cursor-pointer object-cover"
					layout="fill"
					alt="Logo"
				/>
			</div>

			{/* avatar */}
			<div
				className={`absolute top-2 left-2 w-9 h-9 rounded-full border-[4px] border-main-color`}
			>
				<Image
					src={Avatar}
					className={`rounded-full`}
					layout="fill"
					alt="content"
				/>
			</div>

			{/* username */}
			<p
				className={`absolute bottom-1.5 left-2.5 right-2.5 text-gray-100 font-semibold text-sm`}
			>
				Vũ Ngọc Duyệt
			</p>
		</div>
	);
}
