import Image from 'next/image';
import Poster from '../../public/poster.jpg';
import ThaoAvatar from '../../public/thao-avatar.jpg';

export default function Header() {
	return (
		<div className="relative bg-white">
			<div className="max-w-[940px] mx-auto">
				<div className="relative">
					{/* Cover image */}
					<div className="relative rounded-br-lg rounded-bl-lg overflow-hidden pb-[37.2%]">
						<Image
							src={Poster}
							className="cursor-pointer object-cover"
							layout="fill"
							alt="Cover image"
						/>
					</div>

					{/* Avatar */}
					<div className="absolute -bottom-4 left-[50%] translate-x-[-50%] w-[168px] h-[168px] rounded-full border-4 border-white">
						<Image
							src={ThaoAvatar}
							className="cursor-pointer object-cover rounded-full"
							layout="fill"
							alt="Avatar"
						/>
						<div className="absolute w-8 h-8 bottom-2.5 right-1.5 rounded-full border-4 border-white bg-green-500" />
					</div>
				</div>

				<h2 className="text-center text-3xl font-bold my-6">Phương Thảo</h2>

				{/* Navigation */}
				<div className=""></div>
			</div>
		</div>
	);
}
