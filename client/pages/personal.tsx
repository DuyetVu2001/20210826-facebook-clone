import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/personalPage/Header';
import LeftContent from '../components/personalPage/LeftContent';
import RightContent from '../components/personalPage/RightContent';
import { ListPostsDocument } from '../generated/graphql';
import { addApolloState, initializeApollo } from '../lib/apolloClient';

const Personal: NextPage = () => {
	return (
		<div className="relative bg-gray-100 dark:bg-dark-main">
			<Head>
				<title>Personal</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			{/* HEADER */}
			<Header />

			{/* MAIN CONTENT */}
			<main className="relative flex max-w-[880px] mx-auto mt-4">
				{/* LEFT */}
				<LeftContent />

				{/* RIGHT */}
				<RightContent />
			</main>
		</div>
	);
};

export const getStaticProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({ query: ListPostsDocument });

	return addApolloState(apolloClient, { props: {} });
};

export default Personal;
