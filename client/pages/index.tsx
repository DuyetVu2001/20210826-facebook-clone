import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import Chat from '../components/chat/Chat';
import ChatRoomCreate from '../components/homePage/MainContent/ChatRoomCreate';
import NewPost from '../components/homePage/MainContent/CreatePost';
import Story from '../components/homePage/MainContent/Story';
import RightMenu from '../components/homePage/RightMenu';
import LeftMenu from '../components/LeftMenu';
import Navbar from '../components/Navbar';
import Posts from '../components/posts';
import { LIMIT } from '../constants';
import { ChatContext } from '../context/isDisPlayChat/IsDisPlayChat';
import { ListPostsDocument } from '../generated/graphql';
import useCheckAuth from '../hooks/useCheckAuth';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import Loading from '../public/loading.gif';

const Home: NextPage = () => {
	const { isDisplayChat }: any = useContext(ChatContext);
	const { loading: checkAuthLoading } = useCheckAuth();

	return (
		<div className="relative bg-gray-100 dark:bg-dark-main">
			<Head>
				<title>Facebook Clone</title>
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
			<main className="pt-5 relative">
				<RightMenu />
				<LeftMenu />

				{/* main content */}
				<div className="2md:px-8 mx-auto 2md:mx-0 2lg:mx-auto 2md:w-5/7 2lg:w-3/5 max-w-[700px]">
					{/* Story list */}
					<div className="flex space-x-2">
						<Story />
						<Story />
						<Story />
						<Story />
						<Story />
						<Story />
					</div>

					<NewPost />
					<ChatRoomCreate />

					{/* LIST POSTS */}
					<Posts />
				</div>
			</main>

			{isDisplayChat && <Chat />}
		</div>
	);
};

export const getStaticProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: ListPostsDocument,
		variables: {
			limit: LIMIT,
		},
	});

	return addApolloState(apolloClient, { props: {} });
};

export default Home;
