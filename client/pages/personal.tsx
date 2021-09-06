import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/personalPage/Header';
import LeftContent from '../components/personalPage/LeftContent';
import RightContent from '../components/personalPage/RightContent';
import { LIMIT } from '../constants';
import { ListPostsDocument } from '../generated/graphql';
import { addApolloState, initializeApollo } from '../lib/apolloClient';

const Personal: NextPage = () => {
	return (
		<div className="dark:bg-dark-main relative bg-gray-100">
			<Head>
				<title>Personal</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Header />
			{/* MAIN CONTENT */}
			<div className="mx-4">
				<main className="2md:flex 2md:max-w-[880px] mx-auto relative max-w-[500px]">
					<LeftContent />
					<RightContent />
				</main>
			</div>
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

export default Personal;
