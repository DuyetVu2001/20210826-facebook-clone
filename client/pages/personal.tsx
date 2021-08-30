import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Header from '../components/personalPage/Header';

const Personal: NextPage = () => {
	return (
		<div className="relative bg-gray-100 dark:bg-dark-main">
			<Head>
				<title>Personal</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main className="relative">
				<Header />
			</main>
		</div>
	);
};

export default Personal;
