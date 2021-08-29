import type { NextPage } from 'next';
import Head from 'next/head';
import LeftMenu from '../components/LeftMenu';
import Navbar from '../components/Navbar';
import MainContent from '../screens/home/MainContent';
import RightMenu from '../screens/home/RightMenu';

const Home: NextPage = () => {
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
				<MainContent />
			</main>
		</div>
	);
};

export default Home;
