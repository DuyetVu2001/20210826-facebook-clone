import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import Chat from '../components/chat/Chat';
import Navbar from '../components/Navbar';
import Header from '../components/personalPage/Header';
import LeftContent from '../components/personalPage/LeftContent';
import RightContent from '../components/personalPage/RightContent';
import { ChatContext } from '../context/isDisPlayChat/IsDisPlayChat';
import useCheckAuth from '../hooks/useCheckAuth';
import Loading from '../public/loading.gif';

const Personal: NextPage = () => {
	const { loading: checkAuthLoading } = useCheckAuth();
	const { isDisplayChat }: any = useContext(ChatContext);

	return (
		<div className="dark:bg-dark-main relative bg-gray-100">
			<Head>
				<title>Personal</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* LOADING... */}
			{checkAuthLoading && (
				<div className="fixed z-10 top-0 left-0 right-0 bottom-0 grid place-items-center opacity-70 bg-gray-100">
					<div className="relative w-10 h-10">
						<Image
							src={Loading}
							className={`object-cover rounded-full`}
							layout="fill"
							alt="content"
						/>
					</div>
				</div>
			)}

			<Navbar />
			<Header />
			{/* MAIN CONTENT */}
			<div className="mx-4">
				<main className="2md:flex 2md:max-w-[880px] mx-auto relative max-w-[500px]">
					<LeftContent />
					<RightContent />
				</main>
			</div>

			{isDisplayChat && <Chat />}
		</div>
	);
};

export default Personal;
