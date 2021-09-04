import type { NextPage } from 'next';
import Head from 'next/head';
import MainContent from '../components/homePage/MainContent';
import RightMenu from '../components/homePage/RightMenu';
import LeftMenu from '../components/LeftMenu';
import Navbar from '../components/Navbar';

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
