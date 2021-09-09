import Image from 'next/image';

export default function Emoji({ emoji }: any) {
	return (
		<div className="relative w-14 h-14">
			<Image src={emoji} className="object-cover" layout="fill" alt="" />
		</div>
	);
}
