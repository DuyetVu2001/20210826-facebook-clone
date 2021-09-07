import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext, useState } from 'react';
import Chat from '../components/chat/Chat';
import ChatRoomCreate from '../components/homePage/MainContent/ChatRoomCreate';
import NewPost from '../components/homePage/MainContent/CreatePost';
import Story from '../components/homePage/MainContent/Story';
import RightMenu from '../components/homePage/RightMenu';
import LeftMenu from '../components/LeftMenu';
import Navbar from '../components/Navbar';
import Posts from '../components/Posts';
import { LIMIT } from '../constants';
import { ChatContext } from '../context/isDisPlayChat/IsDisPlayChat';
import { ListPostsDocument } from '../generated/graphql';
import { addApolloState, initializeApollo } from '../lib/apolloClient';

const Home: NextPage = () => {
	const { isDisplayChat }: any = useContext(ChatContext);

	return (
		<div className="bg-gray-100 dark:bg-dark-main relative">
			<Head>
				<title>Facebook Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

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
